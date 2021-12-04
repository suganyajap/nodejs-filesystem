 const env=require("dotenv").config()
const fs=require("fs");
const express=require("express");
const { request } = require("http");
const { response } = require("express");
const app=express();
// import dotenv from "dotenv";
// dotenv.config();
const PORT=process.env.PORT;

//Home page
app.get("/",(request,response)=>{
    response.send("Welcome to Nodejs-filesystem🎈🎈")

});


//creating a file with current timestamp
app.get("/create",(request,response)=>{
    let date_ob = new Date();

// current date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

let curr_date=`${year}/${month}/${date}-${hours}:${minutes}:${seconds}`;

let date_obj = new Date().toJSON().slice(0, 19).replace(/:/g, "-");
fs.writeFile(`file-folder/${date_obj}.txt`, curr_date, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
response.send("file is added in file-folder!!!😄😄😃");
});


// reading directory

app.get("/readdirectory",(request,response)=>{
   const files= fs.readdir("./file-folder",(err,files)=>{
        if(err){
            response.send(err);
             }
             response.send(files);
    });
   

});



app.listen(PORT,()=>console.log("App is stared in",PORT));