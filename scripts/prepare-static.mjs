// Next 16 exports segment payloads into directories; plain static hosts need
// the flattened URL aliases requested by the client router.
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(process.cwd(), '.next-export');
function files(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? files(path.join(dir,e.name)) : [path.join(dir,e.name)]);
}
let count=0;
for (const file of files(root)) {
  const parts=path.relative(root,file).split(path.sep);
  const segment=parts.findIndex((part,index)=>part.startsWith('__next.') && index<parts.length-1);
  if(segment<0 || !file.endsWith('.txt')) continue;
  const alias=path.join(root,...parts.slice(0,segment),parts.slice(segment).join('.'));
  fs.copyFileSync(file,alias); count++;
}
console.log(`Prepared ${count} static router payload aliases.`);


