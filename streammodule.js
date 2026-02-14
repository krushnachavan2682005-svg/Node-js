// Wrting the file
// let fs=require('fs')
// fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
//     if (err) {
//         console.log('Error writing file:', err);
//     } else {
//         console.log('File written successfully!');
//     }
// });
// Appendiing the data in the previous data
// fs.appendFile('example.txt', '\nAppending this line!', (err) => {
//     if (err) console.log(err);
//     else console.log('Data appended successfully!');
// });
// deleting the  file the file get deleted

// fs.unlink('example.txt', (err) => {
//     if (err) console.log(err);
//     else console.log('File deleted successfully!');
// });

// creating the directory
// fs.mkdir('myFolder', (err) => {
//     if (err) console.log(err);
//     else console.log('Directory created!');
// });
// for reading the directory
// fs.readdir('.', (err, files) => {
//     if (err) console.log(err);
//     else console.log('Files in folder:', files);
// });
// fs.rmdir('myFolder', (err) => {
//     if (err) console.log(err);
//     else console.log('Directory removed!');
// });
// let fs=require("fs");
// fs.writeFile("note.txt","Hi! from the nodejs fs",(err)=>{
//   if(err){
//     console.log("the error happen");
    
//   }else{
//     console.log("the text inserted inside the file");
    
//   }
// })
// let fs=require("fs");

// fs.readFile('note.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log('Error reading file:', err);
//     } else {
//         console.log('File content:', data);
//     }
// });
// let fs=require("fs");
// fs.appendFile("note.txt","the name is krushna",(err)=>{
//   if(err){
//     console.log(err);
    
//   }else {
//     console.log("the data upendendd succesfully!");
    
//   }
  
// })
// 

// 5️⃣ Check file exists
// Task:data.txt exists आहे का ते check कर.
// असेल → "File exists"
// नसेल → "File not found"
// Hint: fs.existsSync()

// let fs=require("fs")
// if(fs.existsSync("note.txt")){
//   console.log("the file exist");
  
// }else{

//   console.log("not exist");
  
// }
// // creating thhe folder 
// let fs=require('fs');
// fs.mkdir("New-Folder",(err)=>{
//   if(err){
//     console.log(err);
    
//   }else{
//     console.log("the folder  created");
    
//   }
// })
// reading the  ddirectory
// let fs=require("fs");
// fs.readdir(".",(err,file)=>{
// if(err){
//   console.log(err);
  
// }else{
//   console.log(file);
  
// }
// })
// RENAMING THE FILE
// let fs=require("fs");
// fs.rename("note.txt","new.txt", (err)=>{

//   if(err){
//     console.log(err);
    
//   }else{
//     console.log("the file name channged succesfully");
    
//   }
// })
// 🔵 HARD LEVEL (Important 🔥)
// 9️⃣ Copy file

// Task:
// source.txt मधला data destination.txt मध्ये copy कर
// (❌ without stream first)

// Hint: readFile + writeFile
// let fs=require("fs");
// let b=""

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log('Error reading file:', err);
//     } else {
//         fs.writeFile("new.txt",data,(err)=>{
//     if(err){
//       console.log(err);
      
//     }else{
//       console.log("the information updated succesfully!");
      
//     }
     
//         })
//     }
//   })
// 1️⃣1️⃣ Count words in file

// Task:
// file मधले total words count कर.

// Hint:
// split(" ")

// const { log } = require("console");
// let fs=require("fs");
// let check=""
// let count="";
// fs.readFile("test.txt","utf-8",(err,data)=>{
//   if(err){
//     console.log(err);
    
//   }else{
//     check=data
//     count=check.trim().split("");
//     console.log(count.length);
    
    
    
//   }
// })
// try {
//   let fs=require("fs")
// if(fs.existsSync("new.txt")){
//   console.log("the fille  exist");
  
// }else{
//    console.log("the file not found");
// }
  
// } catch (error) {
//   console.log(error);
  
// }
// let http=require("http");
// let fs=require("fs");
// const { error } = require("console");
// http.createServer(function(req,res){

// }).listen(2000,()=>{
//   let dte=new Date();
//   let date=dte.toTimeString()
//   fs.appendFile("new.txt",`${date} the serverstarted`,(error)=>{
//     if(error){
//       console.log("the error caused");
      
//     }else{
//       console.log("the text appended succsfully");
      
//     }
//   })
// })
let fs=require("fs")
fs.unlink("test.txt",(err)=>{
  if(err){
    console.log("te error");
    
  }else{
    console.log("the file remocved succesfuly");
    
  }
})