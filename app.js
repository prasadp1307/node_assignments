const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  fs.readFile("usermessage.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat exists";
    }
    res.send(`
        <h3>Welcome to Chat APP</h3>
           ${data} <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST">
                <input id="username" type="text" name="title" placeholder="Enter Username">
                 <button type="submit">Login</button>
             </form>
        `);
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  console.log(username);
  fs.appendFile(
    "usermessage.txt",
    `${username} : ${message}\n`,
    { flag: "a" },
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
});

app.get("/", (req, res) => {
  res.send(`
        <h3>Welcome to Chat APP</h3>
            <form action="/message" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
            <input id="username" type="hidden" name="username">
            <input type="text" name="message" placeholder="Let's start chatting...">
            <button type="submit">Send</button>
        </form>
    `);
});

app.post("/message", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  console.log(username);
  console.log(message);
  fs.appendFile(
    "usermessage.txt",
    `${username} : ${message}\n`,
    { flag: "a" },
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
});

app.listen(7000);
