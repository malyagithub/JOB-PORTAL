import express from "express";
import { appplyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
import isAuthenticated from "../middlewares/Authenticated.js";

const router =  express.Router();

router.route("/apply/:id").get(isAuthenticated,appplyJob);

router.route("/get").get(isAuthenticated,getAppliedJobs);

router.route("/:id/applicants").get(isAuthenticated,getApplicants);

router.route("/status/:id/update").post(isAuthenticated,updateStatus);


export default router;