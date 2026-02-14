// let express=require("express");
// let app=express();
// app.get("/ele",(req,res)=>{
//     res.send({
//         name:"krushna",
//         roll:10
//     })
// })

// app.post("/ele/:id",(req,res)=>{
//     let id=req.params.id;
// res.send(id+"is id")
// })

// app.listen(2000,()=>{
//     console.log("Port 2000 started");
    
// })
require("dotenv").config();

let express=require("express");
let app=express();
app.use(express.json())
let mysql=require("mysql2");
let pool=mysql.createPool({
  host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

})
let students=[
    {name:"krushna",roll:10},
    {name:"ram",roll:1},
    {name:"sager",roll:2},
    {name:"shardul",roll:3}
]

// app.get("/students",(req,res)=>{
//    res.send(students)
  
// })
// app.get("/students/:id",(req,res)=>{
//     let id=req.params.id;
//     res.send(students[id])
// })
// app.post("/student",(req,res)=>{
//     let name=req.body.name;
//     let roll=req.body.roll
//     pool.query("INSERT INTO student (name,roll) values(?,?)",[name,roll],
//         (err,result)=>{
//             if(err){
//                 console.log(err);
                
//             }
//             res.status(200).send("Student inserted successfully")
//         }
//     )
// })
app.patch("/student/:id",(req,res)=>{
    let id=req.params.id;
   let { name, roll} = req.body;

pool.query("UPDATE student SET name =? , roll=? WHERE id=?",
    [name,roll,id],
    (err,result)=>{
        if(err){
            console.log(err);
            res.status(404).send("Student Not found")
            
        }
     console.log(result);
        res.status(200).send("Data change  succesfully")
    }
)

})
// server running
app.listen(process.env.PORT,()=>{
    console.log("post  started");
    
})