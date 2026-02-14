// const express = require("express");
// const app = express();

// // Middleware
// app.use((req, res, next) => {
//   console.log("Middleware is running");
//   next(); // move to next step
// });

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(3000);

// function checkLogin(req, res, next) {
//   if (req.query.user === "admin") {
//     next();
//   } else {
//     res.send("Access denied");
//   }
// }

// app.get("/dashboard", checkLogin, (req, res) => {
//   res.send("Welcome Admin");
// });

// 1️⃣ Print Message Middleware

// Create a middleware that prints
// 👉 "Request received"
// for every request.
// let express=require("express");
// let app=express();
// app.use((req,res,next)=>{
// console.log("Request Received");
// next()
// })
// app.get("/",(req,res)=>{
//   let date=new Date;
//   let curr=date.toDateString()
//   let time=date.toLocaleTimeString()
//   res.send(time +  curr)
// })
// app.listen(2000,()=>{
//   console.log("the port 2000 started");

// })
// 3️⃣ Login Check Middleware
// Create a middleware:
// If username === "admin"
// Allow request
// Else send "Not Authorized"
// Use it on /dashboard route.
// let express=require("express");
// let app=express()
// app.get("/",(req,res,next)=>{
//   if(req.query.username==="admin"){
//     next()
//   }else{
//     res.status(404).send("Not Authhorised")
//   }
//   res.send("Welcome admin ")
// })
// app.listen(2000)
// let express = require("express");
// let app = express();
// app.use((req, res, ok) => {
//   if (req.method === "GET") {
//     res.send("Welcome Get ")
//   } else {
//     res.send("only get request are allowed")
//   }


// })
// app.listen(3000, () => {

//   console.log("the port strt3000");

// })
// 5️⃣ Counter Middleware

// Create a middleware that:

// Counts how many times the server is accessed

// Prints count in console

// let express=require("express");
// let app=express();
// let count=0;
// app.use((req,res,next)=>{
//   count++
//   console.log(count);
//   next()
  
// })
// app.get("/",(req,res)=>{
//   res.send("the count is counting ")
// })
// app.listen(3000,()=>{
//   console.log("the port 3000 is running ");
  
// })

// 6️⃣ Age Validation Middleware
// Create a middleware:
// Take age from query
// If age ≥ 18 → allow
// Else → "Under age"
// Apply it on /vote route.
// let express=require("express");
// let app=express();
// app.get("/",(req,res)=>{
//   if(req.query.age>=18){
//    res.send("You are Applicable for vote")
//   }else{
//     res.send("You are not applicable for vote")
//   }
// })
// app.listen(3000,()=>{
//   console.log("Port 3000 Started");
  
// })
// 7️⃣ JSON Body Checker
// Create a middleware:
// // Check if req.body.username exists
// If not → send "Username required"
// (Hint: use express.json())
let express=require("express");
let JSON=express.json