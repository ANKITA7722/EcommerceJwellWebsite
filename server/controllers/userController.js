const userModel = require("../models/userModel");
// const UserModel= require("../models/userModel");


const customerSave=async(req, res)=>{
    const {name, address, city, pincode, mobile, proname, price}=req.body;
    await userModel.create({

        name:name,
        address:address, 
        city: city,
        pin:pincode,
        mobile: mobile,
        product:proname,
        price:price
    })
  res.send("User Created!!!");
}

const ShowUserData=async(req,res)=>{
     const data=await userModel.find();
    //  console.log(data);
        res.send(data);
}

module.exports={
    customerSave,
    ShowUserData
}