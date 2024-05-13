// // const fs = require('fs')
// const express = require('express');
// // const path = require('path');
// // const exp = require('constants');

// const app = express();
// // const publicPath = path.join(__dirname,'public')
// // console.log(publicPath)


// // app.use(express.static(publicPath))

// app.listen(3000)


const express = require('express');
const  bodyparser = require('body-parser')

const app = express();

const adminroutes = require("./routes/admin.js");
const shoproutes = require("./routes/shop.js");


app.use(bodyparser.urlencoded({extended: false}));

app.use('/admin',adminroutes);
app.use(shoproutes);


app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found #ERROR 404!</h1')
})
app.listen(3000);