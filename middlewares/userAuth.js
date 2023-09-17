const express = require("express");
const db = require("../models");
const jwt = require("jsonwebtoken")
//Assigning db.users to User variable
 const User = db.users;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
 const userExists = async (req, res, next) => {
 //search the database to see if user exist
 try {
   //checking if email already exist
   const emailcheck = await User.findOne({
     where: {
       email: req.body.email,
     },
   });

   //if email exist in the database respond with a status of 409
   if (emailcheck) {
     return res.status(401).json("Authentication failed");
   }

   next();
 } catch (error) {
   console.log(error);
 }
};

const deserialize = async (req,res,) => {
  const token = req.cookies['jwt'];

  const decoded = jwt.verify(token,process.env.secretKey)
  const {id} = decoded;
  const user = await User.findByPk(id,{raw:true});

  req.user = user
  req.isAuthenticated = true
  
}

const isAuthenticated = async (req,res,next) => {
  try{

    await deserialize(req,res,next)
    next();
  }
  catch(error){
    return res.status(401).json("Invalid token!")
  }
}

const isAdmin = async (req,res,next) => {
  if(req.isAuthenticated && req.user.isAdmin){
    req.isAdmin = true
    next()
  }
  else{
    return res.status(404).json("You are not authorized to access this resource")
  }
}

//exporting module
 module.exports = {
 userExists,
 isAuthenticated,
 isAdmin
};