const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user")
const doctorRoute = require("./routes/doctor")
const donorRoute = require("./routes/donor")
const recipientRoute = require("./routes/recipient")
const slotRoute = require("./routes/slot")
const volunteerRoute = require("./routes/volunteer")
require("dotenv").config();
const server = express()
server.use(express.json());

mongoose
  .connect('mongodb+srv://mariyaanjum:123456789mariya@cluster0.8gj2qp1.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(console.log(`DB connected`))
  .catch((err) => {
    console.log("Error Message from DB:",err);
  });

server.use("/api/auth", userRoute);
server.use("/api/register", doctorRoute);
server.use("/api/register", donorRoute);
server.use("/api/register", recipientRoute);
server.use("/api/register", slotRoute);
server.use("/api/register", volunteerRoute);

server.get("/",(req,res)=>{
    res.send("this from the server")
})

server.listen(5000,()=>{
    console.log("server running on port 5000")
})

