const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser')

const adminRoute = require("./routes/adminRoute");
const productRoute = require("./routes/productRoute");
const paymentRoute = require("./routes/payment");
const userRoute= require("./routes/usersRoute");

require("dotenv").config(); 
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// Routes
app.use("/adminuser", adminRoute);
app.use("/product", productRoute);
app.use("/users", userRoute);


app.use("/api/payment/",paymentRoute);


// Database Connection
mongoose.connect(process.env.DBCON).then(() => {
    console.log("DB Connected.......!");
 }).catch((error) => {

    console.error("DB Connection Failed:", error.message);
    
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
