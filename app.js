const express =  require("express")
const db = require('./db');
const mongoose = require('mongoose')
const path = require('path')


const {connectToMongoDB} = require("./db")

require("dotenv").config()

const PORT = process.env.PORT || 8000

const app = express()

const authRoute = require('/routes/Auth')
const postRoute = require('./routes/Posts')
//Connecting to MongoDB
connectToMongoDB()

app.use(express.json())
app.use('./api/blog', authRoute);
app.use('./api/blog/posts', postRoute);


app.get("/", (req, res)=>{
    res.send("This is a blog")
})


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
});