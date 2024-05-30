const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const sequelize = require('./DB/database');
const userRoutes = require('./routes/userroutes');

app.use(express.static(path.join(__dirname,'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'))
});




app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use('/user',userRoutes);


sequelize.sync()
.then((res)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})



