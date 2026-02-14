const express = require("express");
const mysql = require("mysql2");
let cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const pull = mysql.createPool({
    database: "name",
    password: "krushna123",
    user: "root",
    host: "localhost"
})
app.post("/data3", (req, res) => {
    const name = req.body.name;
    pull.query("Insert Into data (name) values (?)", [name], (err, result)=>{
        if(err){
            console.log(err);
            
        }
    })
})
app.get("/data",(req,res)=>{
    pull.query('SELECT * FROM data')
})
app.listen(4000, () => {
    console.log("the 4000 port satrt");

})