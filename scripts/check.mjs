import { access,readFile,readdir } from "node:fs/promises";
import { dirname,join,resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root=join(dirname(fileURLToPath(import.meta.url)),"..");
const out=join(root,"dist");
const files=[];
const fail=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())await walk(path);else if(entry.name.endsWith(".html"))files.push(path)}}
await walk(out);
for(const file of files){
  const html=await readFile(file,"utf8");
  for(const required of ["<title>",'name="description"','rel="canonical"','lang="'])if(!html.includes(required))fail.push(`${file}: missing ${required}`);
  if(!html.includes('id="main"'))fail.push(`${file}: missing main`);
  for(const match of html.matchAll(/(?:src|href)="(\/tokl-korean-proficiency-exam-prep-web\/[^"?#]+)"/g)){
    const relativePath=match[1].replace("/tokl-korean-proficiency-exam-prep-web/","");
    if(/^(ko|en|assets)\//.test(relativePath)){
      let target=resolve(out,relativePath);
      if(!target.includes("."))target=join(target,"index.html");
      try{await access(target)}catch{fail.push(`${file}: broken ${match[1]}`)}
    }
  }
}
for(const path of ["index.html","404.html","sitemap.xml","robots.txt",".nojekyll","ko/index.html","en/index.html"])try{await access(join(out,path))}catch{fail.push(`missing ${path}`)}
if(files.length!==36)fail.push(`expected 36 HTML, found ${files.length}`);
const combined=(await Promise.all(files.map((file)=>readFile(file,"utf8")))).join("\n");
for(const required of ["app.mcyj.examprep.kor0294","https://apps.apple.com/kr/app/id6797335125","Current exam schedule","90문항 · 130분","객관식 80 + 주관식 10","총점 200 · 급수 121+"])if(!combined.includes(required))fail.push(`missing ${required}`);
if(/\b(?:KRW|USD)\s?9,900|₩9,900/.test(combined))fail.push("subscription price claim found");
for(const stale of ["사회복지사","사회복지기초","사회복지실천","응시자격 서류심사","200문항 · 200분","Q-Net","제24회"])if(combined.includes(stale))fail.push(`stale copied exam content found: ${stale}`);
const css=await readFile(join(out,"assets","styles.css"),"utf8");
if(!css.includes("word-break:keep-all"))fail.push("keep-all rule missing");
if(!css.includes("store-badge-frame-sync"))fail.push("Store badge frame rule missing");
if(fail.length){console.error(fail.join("\n"));process.exit(1)}
console.log(`Checked ${files.length} HTML files; metadata, links, page count, keep-all and both exact Store identities passed.`);
