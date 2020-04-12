const fs=require('fs')
const ReadFile=()=>{
    try{
    return JSON.parse(fs.ReadFileSync("notes.txt"))
}catch{return[]}}
const add=(title,body)=>{
    try{
        let tab=ReadFile()
        let note={
            title:title,
            body:body
        }
        tab.push(note);
        fs.writeFileSync('notes.txt',JSON.stringify(tab))
    }
    catch(err){console.log(err)};
}
const remove=(title)=>{
    try{let tab=JSON.parse(fs.readFileSync("note.txt"));
    fs.writeFileSync("notes.txt",json.stringfy(tab.filter(e=>e.title!==title)));
}
catch(er){console.log(er)}
}
const list=()=>{
    try{console.log(JSON.parse(fs.readFileSync("notes.js")))
}catch(er){console.log(er)}
}
const fetsh=(title)=>{
try{let tab=JSON.parse(fs.readFileSync("note.txt"));
console.log(JSON.stringfy(tab.filter(e=>e.title===title)));
}catch(er){console.log(er)}
}
module.exports={
    add:add,
    remove:remove,
    list:list,
    fetsh:fetsh
}