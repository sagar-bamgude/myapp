const { log } = require('console');
const express=require('express')
const app=express()

const router= express.Router()

const privateRoutr= express.Router()

const jwt =require('jsonwebtoken')



app.use(router)

app.use(privateRoutr)


router.get('/login',(req,res)=>{
   console.log("in login"); 
 const key=  jwt.sign(req.query,'sssss')

    res.send({key:key})

})

privateRoutr.use(abc)

privateRoutr.get('/sagar',(req,res)=>{
    console.log("in sagar"); 
//   const key=  jwt.sign(req.query,'sssss')
 
     res.send({name:"sagar hhhhhhhh"})
 
 })

 privateRoutr.get('/home',(req,res)=>{
    console.log("in home"); 
//   const key=  jwt.sign(req.query,'sssss')
 
     res.send({name:"sagar hhhhhhhh"})
 
 })

 router.get('/public',(req,res)=>{
    console.log("in public"); 
//   const key=  jwt.sign(req.query,'sssss')
 
     res.send({name:"public public"})
 
 })


//  privateRoutr.post('/sasa', next)


function abc(req,res,next){
    const token1=req.headers.authorization
    jwt.verify(token1,'sssss',(err,user)=>{
        if(err){
        console.log(err);
        res.send(err)
        }
    else{
        console.log("in abc");
        // this.next()
        next()
    }
    })  
}

// function next(req,res){
//     console.log("in next");
//     return res.send("sagar route")

//     }


app.listen(5000,()=>{
    console.log("server started")
})