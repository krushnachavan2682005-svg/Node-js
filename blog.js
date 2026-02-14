let express=require("express");
let app=express();
app.use(express.json())
let blog=[
        {
            id:1,
            title:"Freedom Figter",
            content:"The great freedom fighter is mahatma gandhi",
            author:'Krushna Chavan'
        },
        {
            id:2,
             title:"Ecommerse",
            content:"The Eccomarce is thhe great business",
            author:'Krish chavan'

        }
    ]
// app.get("/blogs",(req,res)=>{
    
//     res.status(200).send(blog)
// })
// app.post("/blogs",(req,res)=>{
//   const { id, title, content, author } = req.body;

//     blog.push({id,title,content,author}),
//    res.status(200).send("Date Inserted Succesfully")
// })

// app.put("/blogs/:id",(req,res)=>{
//     let id=parseInt(req.params.id);
//     const{title,content,author}=req.body;
//     blog.forEach(e =>{
//         if(e.id==id){
//             e.title=title;
//             e.content=content;
//             e.author=author;
//         }
//     })
//     res.send("data changed")

    
// })
app.delete("/blogs/:id",(req,res)=>{
    let id=parseInt(req.params.id);
   
    blog.forEach(e =>{
        if(e.id==id){
            e.id=""
            e.title="";
            e.content="";
            e.author="";
        }
    })
    res.send("data deleted Succesfully")

    
})
app.listen(2000,()=>{
    console.log("Port 2000 Started");
    
})