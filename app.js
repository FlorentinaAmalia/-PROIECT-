
const http = require("http");
const hostname = '127.0.0.1';


const express = require('express');
const app = express();
const port = 5500;



app.get("*",(req,res)=>{
    res.sendFile(__dirname + "/404.html")
    // res,send("404 page")
})

// app.all('*', (req, res) => {
//     res.render("404", {title:"404"})
//     // res.sendFile(`${__dirname}/404.html`);
// });

// app.use((req, res, next) => {
//     res.status(404).sendFile("404.html");
//   });

app.listen(5500, ()=>{
    // console.log("App listen 5500");
    console.log(`Server running at http://${hostname}:${port}/`);
})
