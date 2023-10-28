import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//@desc  auth user/set token
//route  POST /api/users/auth
//access Pubic
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//@desc  Register a new user
//route  POST /api/users
//access Pubic
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//@desc  Logout user
//route  POST /api/users/logout
//access Pubic
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

//@desc  Get user profile
//route  GET /api/users/profile
//access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

//@desc  Update user profile
//route  PUT /api/users/profile
//access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
