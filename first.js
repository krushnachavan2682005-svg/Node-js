// // let http=require('http');
// // http.createServer(function(req,res){
// //     res.writeHead(200,{'content-type':'text/plain'});
// //     res.end('hello World')
// // }).listen(3000);
// // let http=require('http')
// // http.createServer(function(req,res){
// //     res.writeHead(200,{'content-type':'text/plain'});
// //     res.end("Welcome to the ndoe server")
// // }).listen(3000)
// // changing the content type to the text/html
// // let http=require('http')
// // http.createServer(function(req,res){
// //     res.writeHead(200,{'content-type':'text/html'})

// //     res.end("<h1>Hello World</h1>\n<p>This is my first server</p>")
// // }).listen(3000)
// // routing via url
// // let http=require('http')
// // http.createServer(function(req,res){
// //     if(req.url==="/"){
// //         res.writeHead(200,{'content-type':'text/html'});
// //         res.end("<h1>Home Page</h1>")
// //     }else if(req.url==="/about"){
// //         res.writeHead(200,{"content-type":"text/html"});
// //         res.end("<h1>The About Page</h1>")
// //     }else{
// //         res.writeHead(404,{"content-type":"text"})
// //         res.end("The Access Denied")
// //     }
// // }).listen(3000)
// // let http=require('http')
// // const { url } = require('inspector/promises')
// // http.createServer(function(req,res){
// //     if(req.url==="/success"){
// //         res.writeHead(200,{"content-type":"text/html"})
// //        res.end("<h1 style=\"color:green\">Ok</h1>")
// //     } else if(req.url==="/notfound"){
// //         res.writeHead(404,{"content-type":"text"})
// //         res.end("Denied")
// //     }else{
// //         res.writeHead(500,{"content-type":"text"})
// //         res.end("error")
// //     }
// // }).listen(3000)
// // let http = require('http')
// // let url = require('url')

// // http.createServer(function(req, res) {

// //     //  if wecant use true here the data come get store in th string format
// //     let data = url.parse(req.url, true)
// //     let name = data.query.name


// //     res.writeHead(200, {"Content-Type":"text/html"})

// //     if(name){
// //         res.end("Hello " + name)
// //     } else {
// //         res.end("Hello Guest")
// //     }

// // }).listen(3500)
// // let http=require('http')
// // let url = require('url')
// // http.createServer(function(req,res){
// //     let data=url.parse(req.url, true)
// //     let name=data.query.name;
// //     let age=data.query.age;
// //     res.writeHead(200,{"content-type":"text/html"})
// //     if(name && age){
// //        res.end("Hello " + name + " Age " + age);

// //     }else{
// //         res.end("No responce")
// //     }
// // }).listen(3500, () =>{
// // console.log("Ser 3500 Turned On Succesffully");

// // })
// // 🧩 Problem 2: Greeting based on time (query)
// // ❓ Task:
// // URL मध्ये time parameter असेल
// // 🧪 URL examples:
// // ?name=Krushna&time=morning
// // ?name=Krushna&time=evening
// // 🧾 Output:
// // let http=require('http')
// // let url=require('url')
// // http.createServer(function(req,res){
// //     let data=url.parse(req.url,true);
// //     let name=data.query.name;
// //     let time=data.query.time;
// //   res.writeHead(200,{"content-type":"text/html"})
// //   res.end("Good"+time+name)
// // }).listen(3500,()=>{
// //     console.log("the port 3500 stated");
    
// // })
// // 🧩 Problem 3: Simple calculator (important 🔥)
// // ❓ Task:
// // URL मधून 3 values घ्या:
// // a
// // b
// // op (add, sub, mul)
// // 🧪 Example URLs:
// // let http=require('http')
// // let url=require('url')
// // http.createServer(function(req,res){
// //     let data=url.parse(req.url,true)
// //     let a=Number(data.query.a);
// //     let b=Number(data.query.b);
// //     let ope=data.query.ope;
// //     res.writeHead(200,{"content-type":"text/html"})
// //     if(ope=="add"){
// //         res.end(a+b)
// //     }else if(ope=="mul"){
// //         res.end(a*b)
// //     }
// // }).listen(3500,()=>{
// //     console.log("port turned on!");
    
// // })
// // 🧩 Problem 4: Login check (basic logic)
// // ❓ Task:
// // URL मधून:username
// // password
// // 🧪 Rule:
// // username = admin
// // password = 1234
// // 🧾 Output:
// // Correct → Login Successful
// // Wrong → Invalid Credentials
// // Missing → Please login
// // let http=require ('http')
// // let url=require ('url')
// // http.createServer(function(req,res){

// //     let data=url.parse(req.url,true)
// //     let name=data.query.name;
// //     let password=data.query.password;
// //     if(name==="admin"&& password==="123"){
// //         res.writeHead(200,{"content-type":"text/html"})
// //         res.end("<h1>Login Succesfull</h1>")
// //     }else{
// //         res.writeHead(404,{"content-type":"text/html"})
// //         res.end("Password Invalid")
// //     }
// // }).listen(2000,()=>{
// //     console.log("port 2000 ternued on");
    
// // })
// // marks ≥ 75 → Distinction
// // 60–74 → First Class
// // < 60 → Pass
// // Missing → Enter marks
// // let http=require("http");
// // let url=require("url")
// // http.createServer(function (req,res){
// //     let data=url.parse(req.url,true);
// //     let marks=data.query.marks
// //     if(marks>75){
// //         res.writeHead(200,{"content-type":"text/html"})
// //         res.end("distinction")
// //     }else if(marks<75){
// //           res.writeHead(200,{"content-type":"text/html"})
// //           res.end("pass")
// //     }

// // }).listen(3000,()=>{
// //     console.log("port on 3000");
    
// // })
// // let http=require("http");
// // let url=require("url")
// // http.createServer(function(req,res){
// //     res.writeHead(200,{"content-type":"text/html"})
// //     res.end("")
    
// // }).listen(2000, ()=>{
// // console.log("2000 port turn on");

// // });
// // let http=require("http")
// // http.createServer( function (req,res){
// //     res.writeHead(200,{"content-type":"text"})
// //     res.end("hi my name is krushna")
// // }).listen(3000,()=>{
// // console.log("the port 3000 turnon ");

// // })
// // const { log } = require('console');
// // const { log } = require('console');
// // let http= require('http');
// // let url=require("url");
// // http.createServer(function(req,res){
// // let data=url.parse(req.url,true)
// // console.log(data);

// // if(data.pathname==="/"){
// //     res.writeHead(200,{"content-type":"text/html"})
// //     res.end("<h1>hi I am the home page  </h1>")
// // }else if(data.pathname==="/admin"){
// //     res.writeHead(200,{"content-type":"text/html"})
// //     res.end("<h1>this  is the admin page</h1>")
// // }else {
// //         res.writeHead(404,{"content-type":"text/html"})
// //         res.end("the error")
// // }
// // }).listen(2000,()=>{
// //     console.log("the port 2000 get started");
    
// // })
// let https= require("https")
// const fs = require("fs");

// const options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem")
// };
// https.createServer(function (req,res){
//     res.writeHead(200,{"content-type":"text"})
//     res.end("hi my name is https")
// }).listen(5000,()=>{
//     console.log("Server turned on Succesfully...");
    
// })
// let http=require("http");
// let url=require("url")
// http.createServer(function (req,res){
// let data=url.parse(req.url,true);
// if(data.query.name ==="krushna"){
//     res.writeHead(200,{"content-type":"text/html"})
//     res.end("krushna <h1>the name is krushna</h1>")
// }
// }).listen(2000,()=>{
//     console.log("the server 2000 started");
    
// })


// let http=require('http');
// let url=require("url");
// http.createServer(function (req,res){
//     let data=url.parse(req.url,true);
//     if(data.path=="/admin"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end("the admin page")
//     }else if(data.path=="/product"){
//          res.writeHead(200,{"content-type":"text/html"})
//         res.end("the product page")

//     }else{
//          res.writeHead(500,{"content-type":"text/html"})
//         res.end("the page not found")
//     }
// }).listen(2000,()=>{
//     console.log("the server 2000 turned ON");
    
// })

// let http=require("http");
// http.createServer(function(req,res){
//     res.writeHead(200,{"content-type":"text/html"})
//     res.end("<h1>HI </h1> <p>the  name is krushna</p>")

// }).listen(2000,()=>{
//     console.log("the server 2000  started");
    
// })
