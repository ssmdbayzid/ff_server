const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/connectDB");
const productRoute = require("./routes/productRoute");
require("dotenv").config()

//* ------------middleware---------

app.use(express.json());
app.use(cors());

//* ------------product route---------

app.use("/products", productRoute)

app.get("/", (req, res) =>{
    res.send("The Server is Connected")
})







app.listen(port, ()=>{
    console.log(`Server running with port ${port}`);
    connectDB()
})