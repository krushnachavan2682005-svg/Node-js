// const crypto = require("crypto");

// const password = "mypassword";

// const hash = crypto
//   .createHash("sha256")
//   .update(password)
//   .digest("hex");

// console.log(hash);
// Example Problem ✅
// Problem:
// User ला password टाकायचा आहे ("mypassword123")
// त्याचा SHA256 hash तयार कर
// Console मध्ये Hash print कर
// Extra:
// User दुसरा password टाकेल ("mypassword123" vs "mypassword124")
// Compare कर आणि सांग “Same or Different”
// let crypto=require("crypto")
// let password="1234";
// let hash=crypto
// .createHash("sha256")
//  .update(password)
//  .digest("hex")
//  console.log(hash);
 
 
//  let password1="123kqwha4";
//  let hash1=crypto
//  .createHash("sha256")
//  .update(password1)
//  .digest("hex")
//  if(hash==hash1){
//     console.log("same");
    
//  }else{
//     console.log("not the same");
    
//  }

//  let token = crypto.randomBytes(32).toString("hex");
// console.log(token);
// const crypto = require("crypto");
// let password="12234";
// let hash=crypto
// .createHash("sha256")
// .update(password)
// .digest("hex")
// console.log(hash);

// const { log } = require("console");
// let crypto=require("crypto")
// let password="1234";
// let hash1=crypto
// .createHash("sha256")
// .update(password)
// .digest("hex")


// let password1="12304";
// let hash2=crypto
// .createHash("sha256")
// .update(password1)
// .digest("hex")
// if(hash1==hash2){
//    console.log("the password match");
   
// }else{
//    console.log("the password not matches");
   
// }
// const crypto = require('crypto');

// // 20 bytes चा random token बनवा
// const token = crypto.randomBytes(20).toString('hex');

// console.log(token);

// const crypto = require("crypto");

// const password = "mypassword";
// const salt = crypto.randomBytes(16).toString("hex");

// const hash = crypto
//   .createHmac("sha256", salt)
//   .update(password)
//   .digest("hex");

// console.log("Salt:", salt);
// console.log("Hash:", hash);
let bycrypt=require("bcrypt");
let password="1234";
bycrypt.genSalt(10,(err,salt)=>{
 bycrypt.hash(password,salt,(err,hash)=>{
   console.log(hash);
   
 })

})
let pass1="1234";
bycrypt.genSalt(10,(err,salt)=>{
  bycrypt.hash(pass1,salt,(err,hash)=>{

    console.log(hash);
    
  })
})
let crypto=require("crypto");
let pass2="1234";
let hash=crypto
.createHash("sha256")
.update(pass2)
.digest("hex")
console.log(hash);


let pass3="1234";
let hash1=crypto
.createHash("sha256")
.update(pass3)
.digest("hex")
console.log(hash1);
