const { log } = require('console');
const express=require('express')
const app=express()
const cluster=require('node:cluster')
const cpus=require('os').cpus().length
const fs =require('fs')
const path=require('path')
// const mongo=require('mongoose')

// // const p=path.join('','C:\Users\Sagar\Downloads\sample.mov')

// mongo.connect('mongodb://127.0.0.1:27017/student').then(()=>{
//     log("mongo connected")

// }).catch((err)=>{
//     console.log(err);
// })

// const studentSchema=new mongo.Schema({
// name:{
//     type:String,
//     required:true
// },likes:{
//     type:Number,
//     required:false
// },marks:{
//     type:String,
//     required:false
// }
// })

// const student=mongo.model('student',studentSchema)

// student.insertMany([{name:"sagar",marks:8080,likes:13}]).then((data)=>{
//     console.log(data,"data");
// })

app.get("/video", function (req,res){

    const range=req.headers.range
    if(!range){
        res.status(400).send("range requred")
    }

    const vidiosize =fs.statSync("bigbuck.mp4").size
        const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, vidiosize - 1);
  
    const contentLength = end - start + 1;

 const headers={
    "Content-Range": `bytes ${start}-${end}/${vidiosize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  }
    res.writeHead(206, headers);
  
    const videoStream = fs.createReadStream("bigbuck.mp4", { start, end });
    videoStream.pipe(res);
})



app.get("/",(req,res)=>{
res.sendFile(__dirname+'/index.html')
})



app.listen(8000,()=>{
    log("server is running")
})




