const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
for (const lang of ['pl','en']) for (let n=1;n<=20;n++) {
  const name=`module-${String(n).padStart(2,'0')}`;
  const file=path.join(root,'modules',lang,`${name}.js`);
  const context=vm.createContext({window:{}});
  vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file,timeout:2000});
  const data=JSON.parse(JSON.stringify(context.window.MODULE_DATA?.[n]));
  if (!data || typeof data!=='object') throw new Error(`Missing module ${lang}/${name}`);
  const target=path.join(root,'editor',lang,name);
  fs.mkdirSync(target,{recursive:true});
  fs.writeFileSync(path.join(target,'content.html'), data.contentHtml ?? '', 'utf8');
  for (const kind of ['storyQuiz','examQuiz','flashcards'])
    fs.writeFileSync(path.join(target,`${kind}.json`),JSON.stringify(data[kind]??[],null,2)+'\n','utf8');
  const meta=Object.fromEntries(Object.entries(data).filter(([key])=>!['contentHtml','storyQuiz','examQuiz','flashcards'].includes(key)));
  fs.writeFileSync(path.join(target,'meta.json'),JSON.stringify(meta,null,2)+'\n','utf8');
}
console.log('Exported 40 modules to editor/pl and editor/en.');
