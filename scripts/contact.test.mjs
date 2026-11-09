import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function load(file, dependencies = {}, env = {}) {
  const code = ts.transpileModule(
    fs.readFileSync(path.join(root, file), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    },
  ).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports,
    require: (name) => {
      if (!(name in dependencies))
        throw new Error(`Unexpected dependency: ${name}`);
      return dependencies[name];
    },
    process: { env },
    Response,
    Request,
    TextDecoder,
    URL,
  });
  return exports;
}
const content = load("src/lib/content.ts");
const contact = load("src/lib/contact.ts", { "./content": content });
const valid = {
  name: "Test enquiry",
  email: "review@example.test",
  phone: "",
  service: "General enquiry",
  message: "A local validation test. No email is sent.",
  website: "",
};
function route(
  env = { RESEND_API_KEY: "test-only", CONTACT_TO_EMAIL: "inbox@example.test" },
  failure = false,
) {
  const sent = [];
  class Resend {
    emails = {
      send: async (message) => {
        sent.push(message);
        return failure
          ? { error: { message: "Test provider failure" } }
          : { data: { id: "test" }, error: null };
      },
    };
  }
  return {
    sent,
    ...load(
      "src/app/api/contact/route.ts",
      { resend: { Resend }, "@/lib/contact": contact },
      env,
    ),
  };
}
function request(body, options = {}) {
  return new Request("https://example.test/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://example.test",
      ...options.headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
test("successful enquiry reaches the configured recipient with reply-to", async () => {
  const api = route();
  const result = await api.POST(request(valid));
  assert.equal(result.status, 200);
  assert.equal((await result.json()).ok, true);
  assert.equal(api.sent.length, 1);
  assert.equal(api.sent[0].to, "inbox@example.test");
  assert.equal(api.sent[0].replyTo, valid.email);
  assert.match(api.sent[0].text, /A local validation test/);
});
test("required fields, email and message limits are validated server-side", async () => {
  const api = route();
  for (const update of [
    { name: "  " },
    { email: "invalid" },
    { message: "short" },
    { message: "x".repeat(5001) },
    { phone: "x".repeat(41) },
  ]) {
    assert.equal(
      (await api.POST(request({ ...valid, ...update }))).status,
      400,
    );
  }
  assert.equal(api.sent.length, 0);
});
test("only current service labels are accepted", async () => {
  for (const service of content.services)
    assert.equal(
      contact.parseContact({ ...valid, service: service.title }).ok,
      true,
    );
  assert.equal(
    contact.parseContact({ ...valid, service: "Import & export" }).ok,
    false,
  );
  assert.equal(
    contact.parseContact({
      ...valid,
      service: "Injected\nBcc: victim@example.test",
    }).ok,
    false,
  );
});
test("honeypot submissions never invoke the email provider", async () => {
  const api = route({});
  assert.equal(
    (await api.POST(request({ ...valid, website: "spam.example" }))).status,
    200,
  );
  assert.equal(api.sent.length, 0);
});
test("missing configuration and provider failures do not claim delivery", async () => {
  assert.equal((await route({}).POST(request(valid))).status, 503);
  const response = await route(undefined, true).POST(request(valid));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});
test("cross-origin, non-JSON, malformed and oversized requests are rejected", async () => {
  const api = route();
  assert.equal(
    (
      await api.POST(
        request(valid, { headers: { origin: "https://other.test" } }),
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await api.POST(
        request(valid, { headers: { "content-type": "text/plain" } }),
      )
    ).status,
    415,
  );
  assert.equal((await api.POST(request("{"))).status, 400);
  assert.equal(
    (await api.POST(request({ ...valid, message: "x".repeat(33000) }))).status,
    413,
  );
  assert.equal(api.sent.length, 0);
});
test("portfolio contains all ten projects with simple statuses and no progress percentages", () => {
  assert.equal(content.projects.length, 10);
  assert.equal(new Set(content.projects.map((p) => p.slug)).size, 10);
  assert.equal(
    content.projects.filter((p) => p.status === "Completed").length,
    6,
  );
  assert.equal(
    content.projects.filter((p) => p.status === "Ongoing").length,
    4,
  );
  assert.ok(content.projects.find((p) => p.slug === "ade-dawe-phase-ii"));
  assert.doesNotMatch(JSON.stringify(content.projects), /\d+%/);
  assert.match(
    content.projects.find((p) => p.slug === "hobicha-water-supply").delivery,
    /Bigeta Business PLC/,
  );
});
test("every referenced image and competency PDF exists locally", () => {
  const images = [
    ...content.services.map((s) => s.image),
    ...content.projects.flatMap((p) => p.gallery ?? []),
  ];
  for (const image of images)
    assert.ok(fs.existsSync(path.join(root, "public", image.src)), image.src);
  for (const cert of content.qualifications)
    assert.ok(
      fs.existsSync(path.join(root, "public", cert.document)),
      cert.document,
    );
});
