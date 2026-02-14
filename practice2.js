let express=require("express");
let mysql=require("mysql2");
let cors=require("cors");
let app=express();
app.use(cors());
app.use(express.json())
let pool=mysql.createPool({
    database:"name",
    host:"localhost",
    password:"krushna123",
    user:"root"

});
app.post("/practice2",(req,res)=>{
    let name=req.body.name;
    let age=req.body.age;
    let email=req.body.email;
    pool.query("INSERT INTO practice2 (name,age,email) values(?,?,?) ",[name,age,email],
        (err,result)=>{
            if(err){
                console.log(err);
                
            }else{
                res.send("ok")
            }
        }
    )
})
// gettng the data
app.get("/practice2",(req,res)=>{
    pool.query("SELECT * FROM practice2",(err,result)=>{
        if(err){
            console.log(err);
            
        }
        else{
            res.json(result)
        }
    })
})
// putting into the table
app.put("/practice2/:id",(req,res)=>{
    let id=req.params.id;
    let name=req.body.name;
    let age=req.body.age;
    let email=req.body.email
    pool.query("UPDATE practice2 SET name=?,age=?,email=? WHERE id=?",
        [name,age,email,id],
        (err,result)=>{
            if(err){
                console.log(err);
                
            }else{
                console.log(result);
                
            }
        }
    )

})
app.delete("/del/:id",(req,res)=>{
    let id=req.params.id;
    pool.query("DELETE FROM practice2 WHERE id=?",
        [id],
        (err,result)=>{
            if(err){
 console.log(err);
 

            }else{
                console.log(result);
                
            }
        }
    )
})
app.listen(4000,()=>{
    console.log("the post 4000 started");
    
})
