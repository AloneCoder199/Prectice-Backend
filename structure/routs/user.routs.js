import express from "express";
import { homeroute } from "../controller/user.control.js";
import {authentication} from "../middelwear/auth.js"
const router = express.Router();


router.route("/home").get(authentication,homeroute);


export default router;