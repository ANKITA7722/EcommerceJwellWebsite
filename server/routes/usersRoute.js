
const express= require("express");
const route= express.Router();
const UserController= require("../controllers/userController");


route.post("/usersave", UserController.customerSave);
route.get("/showuserdata", UserController.ShowUserData);


module.exports=route;