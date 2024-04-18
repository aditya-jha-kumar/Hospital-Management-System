import express from "express";
import { sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middleware/auth.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);

export default router;
