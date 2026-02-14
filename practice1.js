let express=require("express");
let cors=require("cors");
let app=express();
let mysql=require("mysql2");
app.use(cors());
app.use(express.json());
let pull=mysql.createPool({

  database:"name",
    password:"krushna123",
    user: "root",
    host: "localhost"
})

app.post("/practice",(req,res)=>{
    let name=req.body.name;
    pull.query("INSERT INTO datanew (name) values(?)",[name],(err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            res.send("Data innserted succeesfully")
        }
    })
})
app.listen(2500,()=>{
    console.log("the port  2500 started");
    
})
