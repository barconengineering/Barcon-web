export const company = {
  name: "Barcon Engineering",
  email: "info@barconengineering.com",
  phone: "+251 901 223 150",
  phoneHref: "+251901223150",
  address: "Imperial Plaza Building, Office 201",
  locality: "Woreda 02, Lemi Kura Sub-City",
  city: "Addis Ababa, Ethiopia",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  capabilities: string[];
  outcome: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "water-supply-sanitation",
    title: "Water supply & sanitation",
    shortTitle: "Water & sanitation",
    summary: "Complete water systems, from source development to the last connection.",
    description: "We deliver integrated water supply and sanitation infrastructure for towns, rural communities, institutions, and industrial clients. Civil works, pipelines, storage, and electromechanical installations are coordinated as one system, through to testing and handover.",
    capabilities: ["HDPE, DCI, uPVC, and GI pipelines", "Reinforced concrete reservoirs and elevated tanks", "Water distribution networks and public water points", "Pump houses and associated civil works", "Sanitation and sewer infrastructure", "Network testing, commissioning, and handover"],
    outcome: "Reliable water access, durable infrastructure, and efficient distribution.",
    image: "water-infrastructure",
  },
  {
    slug: "irrigation",
    title: "Irrigation systems",
    shortTitle: "Irrigation",
    summary: "Practical water infrastructure that supports productive, resilient agriculture.",
    description: "Our irrigation work connects water sources to farmland through river intakes, canals, pipelines, and pump-based systems. We bring civil and electromechanical disciplines together to deliver practical systems suited to site conditions.",
    capabilities: ["Canal excavation and lining", "River intake and diversion structures", "Pumped and solar-powered irrigation", "Pipeline networks and night storage reservoirs", "Land leveling and field layout", "Hydraulic flow-control structures"],
    outcome: "Efficient water use and dependable irrigation for agricultural production.",
    image: "solar-irrigation",
  },
  {
    slug: "buildings",
    title: "Building construction",
    shortTitle: "Buildings",
    summary: "Well-built spaces, from foundations and structure to the final finish.",
    description: "We construct residential, commercial, public, and industrial buildings. Our teams coordinate earthworks, structural construction, electrical and plumbing installations, and architectural finishing, with quality checks throughout delivery.",
    capabilities: ["Foundations and structural frames", "Reinforced concrete slabs, beams, and columns", "Masonry and partition works", "Electrical and plumbing installations", "Steel fabrication and erection", "Finishing, renovation, and refurbishment"],
    outcome: "Durable buildings supported by coordinated site management and quality workmanship.",
    image: "water-infrastructure",
  },
  {
    slug: "roads-bridges",
    title: "Roads & bridges",
    shortTitle: "Roads & bridges",
    summary: "Connecting communities through dependable roads and crossing structures.",
    description: "Our road and bridge work improves connections between rural and urban communities. We undertake earthworks, pavement layers, drainage, culverts, and rehabilitation, supported by material testing and site supervision.",
    capabilities: ["Earthworks, grading, and compaction", "Sub-base and base course construction", "Gravel and asphalt surfacing", "Culverts, bridges, and drainage", "Road maintenance and rehabilitation", "Road markings, signage, and quality control"],
    outcome: "Safer movement and improved access to services, markets, and opportunities.",
    image: "water-infrastructure",
  },
  {
    slug: "electromechanical",
    title: "Electromechanical systems",
    shortTitle: "Electromechanical",
    summary: "The equipment and controls that keep essential systems working.",
    description: "We supply, install, test, and commission electromechanical equipment for water supply, irrigation, and industrial applications. Our work covers pumping, power generation, controls, and borehole equipping.",
    capabilities: ["Submersible and surface pumps", "Generator supply and installation", "Electrical control panels and automation", "Borehole equipping", "Chlorination and dosing systems", "Testing and commissioning"],
    outcome: "Reliable operation, efficient pumping, and coordinated equipment installation.",
    image: "water-infrastructure",
  },
  {
    slug: "solar-energy",
    title: "Solar energy",
    shortTitle: "Solar energy",
    summary: "Sustainable power for water supply, irrigation, and everyday needs.",
    description: "We supply and install solar systems for water infrastructure, agriculture, homes, institutions, and commercial clients. Our capabilities include off-grid and hybrid configurations, pumping systems, storage, and solar mini-grid components.",
    capabilities: ["AC and DC solar pumping systems", "PV modules and array support structures", "Inverters and charge controllers", "Battery storage systems", "Off-grid and hybrid power systems", "Testing, commissioning, and operator training"],
    outcome: "Reduced dependence on diesel and practical energy access in remote locations.",
    image: "solar-irrigation",
  },
  {
    slug: "import-export",
    title: "Import & export",
    shortTitle: "Import & export",
    summary: "Connecting project requirements with materials, equipment, and global markets.",
    description: "Our licensed trading activities support engineering delivery with construction materials, machinery, pumps, and solar equipment. We also export selected Ethiopian agricultural products, including coffee, fruits, vegetables, and beans.",
    capabilities: ["Pipes, pumps, and electromechanical equipment", "Solar equipment and construction machinery", "Construction materials procurement", "Coffee and agricultural product exports", "International procurement and logistics", "Customs clearance support"],
    outcome: "Coordinated procurement and supply chains that support project delivery.",
    image: "solar-irrigation",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Water & sanitation" | "Solar & irrigation" | "Roads";
  location: string;
  client: string;
  summary: string;
  scope: string[];
  metrics: { value: string; label: string }[];
  record?: { delivery: string; contractDate?: string; status?: string; statusTitle?: string; scopeNote: string };
};

export const projects: Project[] = [
  {
    slug: "hobicha-water-supply",
    title: "Hobicha Medium-Sized Rural Water Supply Project",
    category: "Water & sanitation",
    location: "Wolayita Zone, South Ethiopia",
    client: "Ministry of Water and Energy",
    summary: "Barcon Engineering participated in the Hobicha Medium-Sized Rural Water Supply Project in joint venture with Bigeta Business PLC for the Ministry of Water and Energy. The documented works include storage and booster reservoirs, pressure-break tanks, pumping equipment, pipeline networks and public water points.",
    scope: ["One 300 m³ storage reservoir and one 50 m³ booster reservoir", "Four 10 m³ pressure-break tanks and one 20 m³ pressure-break tank", "Two surface pumps at the booster and one submersible pump at the borehole", "Transmission and distribution pipelines, fittings, valves and accessories", "Public water points", "Booster pump/operator house and guard/generator buildings", "Grid connection and transformer works"],
    metrics: [{ value: "300 m³", label: "Storage reservoir (documented works)" }, { value: "50 m³", label: "Booster reservoir (documented works)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
      contractDate: "6 May 2024",
      statusTitle: "Historical milestone",
      status: "Provisional acceptance recorded on 3 August 2025. This historical milestone does not establish final acceptance or current operational status.",
      scopeNote: "The following describes the documented works of the joint-venture project. Quantities relate to the project as a whole, rather than to Barcon Engineering alone.",
    },
  },
  {
    slug: "kelle-water-sanitation",
    title: "Kelle Town Water Supply & Sanitation",
    category: "Water & sanitation",
    location: "Kelle Town, Kore Zone, South Ethiopia Regional State",
    client: "South Ethiopia Regional Water, Mines and Energy Bureau",
    summary: "Water supply and sanitation infrastructure undertaken by Barcon Engineering in joint venture with Bigeta Business PLC. Historical project records distinguish distribution pipe installation from pipe supply.",
    scope: ["26.132 km of distribution pipe installation reported", "27.041 km of distribution pipes supplied", "Two 500 m³ reinforced concrete reservoirs in the listed scope", "Three 500 kVA diesel generators supplied", "Three submersible pumps and two surface centrifugal pumps supplied", "Six public water points, pump house and sanitation works in the listed scope"],
    metrics: [{ value: "26.132 km", label: "Distribution installed (reported)" }, { value: "27.041 km", label: "Distribution supplied (reported)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
      contractDate: "27 May 2022",
      status: "A historical regional bureau confirmation, referring to a request dated 7 November 2024, reported construction at 90% at the time of the letter. This records progress at that time; it does not confirm current progress, completion or operation.",
      scopeNote: "The documented component list includes completed and ongoing works. These are project-level quantities for the joint venture, not quantities attributed to Barcon alone. The division of responsibilities between the partners is not specified in the reviewed record.",
    },
  },
  {
    slug: "solar-pumping-stations",
    title: "Solarization of Rural Pumping Stations",
    category: "Solar & irrigation",
    location: "Beneya, Burji Zone; Garbota and Birbiskela, Gedeo Zone — South Ethiopia",
    client: "South Ethiopia Regional State Water and Energy Bureau",
    summary: "The documented contract covers the supply, installation and solarization of solar systems at three diesel-powered RPS sites in South Ethiopia: Beneya in Burji Zone, and Garbota and Birbiskela in Gedeo Zone. The contractor is Barcon Engineering in joint venture with Ehun Business PLC, for the regional Water and Energy Bureau.",
    scope: ["Supply and installation of solar systems", "Solarization of three diesel-powered RPS sites", "Beneya site in Burji Zone", "Garbota and Birbiskela sites in Gedeo Zone"],
    metrics: [{ value: "3", label: "RPS sites (contract scope)" }, { value: "Solar", label: "Systems supply and installation (contract scope)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Ehun Business PLC",
      contractDate: "25 March 2026",
      scopeNote: "The following describes the documented scope of the joint-venture contract, rather than works attributed to Barcon Engineering alone.",
    },
  },
  {
    slug: "soka-sonicho-asrado-dama",
    title: "Soka Sonicha–Asarado Dama Rural Water Supply & Sanitation",
    category: "Water & sanitation",
    location: "Gorche Woreda, Sidama Region",
    client: "Sidama National Regional State Water, Mines and Energy Bureau",
    summary: "Barcon Engineering participated in the Soka Sonicha–Asarado Dama rural water-supply project in joint venture with Shimelis Alemu GWWC. The documented scope combines pipeline networks, water storage, public water points and school and health-facility taps with civil and electromechanical works.",
    scope: ["Water-supply civil works", "Supply and installation of pipes, fittings and electromechanical equipment", "Gravity, transmission and distribution pipelines", "Spring collection structure and 100 m³ wet well", "150 m³ elevated service reservoir", "Public water points, two school taps and one health-facility tap", "Pump/generator and guard buildings"],
    metrics: [{ value: "150 m³", label: "Elevated service reservoir (scope)" }, { value: "100 m³", label: "Wet well (scope)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Shimelis Alemu GWWC",
      contractDate: "30 October 2023",
      scopeNote: "The following describes the documented scope of the joint-venture project. Quantities relate to the project as a whole, rather than to Barcon Engineering alone.",
    },
  },
  {
    slug: "karat-town-water",
    title: "Karat Town Water Supply Project",
    category: "Water & sanitation",
    location: "Konso Zone, South Ethiopia",
    client: "South Ethiopia Regional State Water and Energy Bureau",
    summary: "The documented contract for the Karat Town Water Supply Project names Barcon Engineering in joint venture with Bigeta Business PLC as contractor for the regional Water and Energy Bureau. Its scope includes pressure pipelines, valve chambers, anchor and thrust blocks, electromechanical works and additional fittings.",
    scope: ["Pressure pipelines, valve chambers, anchor blocks and thrust blocks", "Electromechanical works", "Supply and installation of additional fittings", "Replacement of HDPE pressure pipe with DCI pipe under the amended scope", "Generator/guard buildings under the amended scope", "Remaining works on a 100 m³ reinforced-concrete reservoir"],
    metrics: [{ value: "DCI", label: "Pressure-pipe replacement (contract scope)" }, { value: "100 m³", label: "Reservoir: remaining works (contract scope)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
      scopeNote: "This describes the documented scope of the joint-venture contract and its amendment, rather than works attributed to Barcon Engineering alone.",
    },
  },
  {
    slug: "dongoro-bonkoya-wash",
    title: "Dongoro Bonkoya WASH",
    category: "Water & sanitation",
    location: "Central Ethiopia",
    client: "Central Ethiopia Regional Water, Irrigation and Mines Development Bureau",
    summary: "Pressure and distribution infrastructure for a community WASH scheme.",
    scope: ["Supply and installation of HDPE and DCI pipes and fittings", "Pressure and distribution line commissioning", "Construction of water points", "Distribution valve chambers", "Anchor blocks"],
    metrics: [{ value: "HDPE & DCI", label: "Pipeline systems" }, { value: "WASH", label: "Project focus" }],
  },
  {
    slug: "debub-qege-shifa-road",
    title: "Debub Qege Shifa Road Maintenance",
    category: "Roads",
    location: "Sidama, Ethiopia",
    client: "Sidama National Regional State Road Development and Transport Bureau",
    summary: "Road maintenance and drainage works to improve an existing gravel road corridor.",
    scope: ["Gravel road spot repairs", "Road blading", "Gabion structure construction", "Reinforced concrete pipe production and installation"],
    metrics: [{ value: "Gravel", label: "Road rehabilitation" }, { value: "Drainage", label: "Supporting structures" }],
  },
  {
    slug: "talato-solar-irrigation",
    title: "Talato Solar-Powered Irrigation",
    category: "Solar & irrigation",
    location: "Konso Zone, Ethiopia",
    client: "South Ethiopia Regional State Bureau of Agriculture",
    summary: "A solar-powered small-scale irrigation project combining energy systems, pressure mains, and canal works.",
    scope: ["Solar system supply and installation", "Pump house and retaining wall construction", "Silt excluder construction", "Pressure main supply and installation", "Main and secondary canal works", "Social service structures"],
    metrics: [{ value: "Solar", label: "Powered irrigation" }, { value: "Konso", label: "Project zone" }],
  },
  {
    slug: "dimeka-town-water",
    title: "Dimeka Town Water Supply & Sanitation",
    category: "Water & sanitation",
    location: "Dimeka, Ethiopia",
    client: "Ministry of Water and Energy",
    summary: "Water infrastructure spanning electromechanical equipment, pressure mains, distribution, storage, and operational buildings.",
    scope: ["Electromechanical works and diesel power source", "Pressure main and distribution network installation", "200 m³ reinforced concrete reservoir", "Public water points and network valve chambers", "Road and river crossings", "Generator house, workshop, office, and associated buildings"],
    metrics: [{ value: "200 m³", label: "Concrete reservoir" }, { value: "Integrated", label: "Water infrastructure" }],
  },
];

export const values = [
  ["Integrity", "Honesty, transparency, and ethical conduct in every decision."],
  ["Quality & excellence", "Reliable engineering, careful workmanship, and continuous improvement."],
  ["Customer focus", "Responsive communication and commitment to our clients’ objectives."],
  ["Innovation", "Practical ideas and modern technology that solve real project challenges."],
  ["Teamwork & accountability", "Shared knowledge, mutual respect, and responsibility for our results."],
];

export const process = [
  { title: "Understand & plan", text: "Client requirements, site assessment, design review, costing, and work scheduling." },
  { title: "Procure & mobilize", text: "Approved materials, equipment readiness, and coordinated specialist teams." },
  { title: "Build & verify", text: "Construction supported by daily inspections, safety monitoring, and progress reporting." },
  { title: "Commission & hand over", text: "Testing, joint inspections, as-built documentation, and responsible project closure." },
];
