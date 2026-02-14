// const EventEmitter = require('events')

// const myEvent = new EventEmitter()

// // listener
// myEvent.on("login", function(){
//     console.log("User logged in")
// })

// // event trigger
// myEvent.emit("login")
// next example
// const EventEmitter = require("events")


// // EventEmitter object create
// const paymentEvent = new EventEmitter()

// // Listener 1
// paymentEvent.on("payment", () => {
//     console.log("Payment received")
// })

// // Listener 2
// paymentEvent.on("payment", () => {
//     console.log("Invoice generated")
// })

// // Listener 3
// paymentEvent.on("payment", () => {
//     console.log("Email sent")
// })

// // Fire (emit) the event
// paymentEvent.emit("payment")
// 🟢 Problem 1: Basic Event (Easy)
// ❓ Task:
// Event name: start
// Listener print करेल: Server started
// Event emit कर
// const EventEmitter = require("events")
// let startevent= new EventEmitter();
// startevent.on("start",()=>{
//     console.log("event STarted");
    
// })
// startevent.emit("start")

// let EventEmitter=require('events')
// let startvehicle= new EventEmitter();
// startvehicle.on("start",()=>{
//     console.log("vehicle Started");
    
// })

// startvehicle.emit("start")
// 🟡 Problem 2: Event with Data
// ❓ Task:
// Event name: login
// Data pass कर: username
// Output:
// let EventEmitter=require("events")
// let login= new EventEmitter();
// let username="krushna";
// login.on("k",()=>{
//     console.log("user"+username+"loggedin");
    
// })
// login.emit("k",username)
// 🟡 Problem 3: Multiple Listeners
// ❓ Task:
// Event: order
// Listener 1 → Order placed
// Listener 2 → Preparing order
// Listener 3 → Order dispatched
// let EventEmitter=require("events")
// let order= new EventEmitter();
// order.on("placed",()=>{
// console.log("Order Placed");

// })
// order.on("placed",()=>{
//     console.log("Preparing order");
    
// })
// order.on("placed",()=>{
//     console.log("Order Dispatched");
    
// })
// order.emit("placed")
// 🟠 Problem 4: Event with Condition
// ❓ Task:
// Event: payment
// Amount pass कर
// Amount >= 500 → Payment Successful
// Amount < 500 → Payment Failed
// let EventEmitter=require("events")
// let payment= new EventEmitter()
// let Amount=500;
// payment.on("pay",()=>{
//     if(Amount>=500){
//         console.log("Payment Succesfull");
        
//     }else{
//         console.log("Payment Unsuccesfull");
        
//     }
// })
// payment.emit("pay",Amount)
// 🔴 Challenge Problem 🔥
// ❓ Task:
// Event: result
// Data: name, marks
// Logic:
// ≥75 → Distinction
// 60–74 → First Class
// <60 → Pass
// let EventEmitter=require('events')
// let result= new EventEmitter();
// let marks=75
// result.on("check",(marks)=>{
//   if(marks>=75){
//     console.log("distinction");
    
//   }else{
//     console.log("pass",);
    
//   }
// })
// result.emit("check",marks)
//  let EventEmitter=require("events");
//  let result= new EventEmitter();
//  let marks=75;
//  result.on("check",(marks)=>{
//     if(marks>=75){
//         console.log("distinction");
        
//     }else{
//         console.log("pass");
        
//     }

//  })
//  result.emit("check",greater)

//  let EventEmitter=require("events")
//  let result= new EventEmitter();
//  let marks=100;
//  result.on("check",(marks)=>{
//     if(marks>50){
//         console.log("the marks are greater");
        
//     }else{
//         console.log("the marks aree smaller");
        
//     }
//  })
//  result.emit("check",marks)
let EventEmitter=require ("events");
let result= new EventEmitter()
let mark=100;
result.on("check",(mark)=>{
    if(mark>50){
        console.log("the mark are greater");
        
    }else{
        console.log("the marks are smaller");
        
    }
})
result.emit("check")