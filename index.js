const express = require("express");
const app = express();
const path = require("path");


const port = 3000;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/View/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username];
    console.log(data)
    if(data){
        res.render("users.ejs",{data});
    }else{
        res.render("noUser.ejs");
    }
    
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
