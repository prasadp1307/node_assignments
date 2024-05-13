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
const  bodyparser = require('body-parser')

const app = express();
app.use(bodyparser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title" placeholder="Product Title"><br><br>
            <input type="text" name="size" placeholder="Product Size"><br><br>
            <button type="submit">Add Product</button>
        </form>
    `);
});



app.use('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next) =>{
   res.send('<h1>Welcome to Homapage!</h1>');  
})

const server = http.createServer(app);

server.listen(3000)