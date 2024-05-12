const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send(`
    <h1>Welcome this is homepage</h1><a href="/about">Go to about page</a>`)
});

// app.get('',(req,res)=> {
//     console.log("data sent =>>>",req.query.name)
//         res.send("how may i help you"+ " " +req.query.name)
// });

app.get('/about', (req, res) => {
    res.send(`
    <input type=text placeholder="name" value="${req.query.name}"/>
    <button>Click me</button>
    </h1><a href="/">Go to home page</a>`)
});



app.get('/help', (req, res) => {
    res.send([{
        name: 'prasad',
        email: "prasad@sayali.com",
    },
    {
        name: "sayali",
        email: "vicky@mau.com"
    }])

});
app.listen(5000);