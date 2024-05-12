// // const fs = require('fs')
// const express = require('express');
// // const path = require('path');
// // const exp = require('constants');

// const app = express();
// // const publicPath = path.join(__dirname,'public')
// // console.log(publicPath)


// // app.use(express.static(publicPath))

// app.listen(3000)



const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('This is first middleware!')
    // res.send("hello from express!")
    next();
});

app.use((req,res,next) =>{
    console.log("this is second middleware!");
    res.send('<h1>Hello to node.js!</h1>');
    
})

app.use((req,res,next) =>{
    console.log("this is third middleware!");
       res.send({key1 : value})
   
})



const server = http.createServer(app);

server.listen(3000)