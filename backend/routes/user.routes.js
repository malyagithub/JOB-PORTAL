import express from "express";
import { login ,register,updateProfile, logout } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/Authenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router =  express.Router();

router.route("/register").post(singleUpload,register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);


export default router;