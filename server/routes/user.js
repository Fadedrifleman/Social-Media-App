import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriends,
} from "../controllers/user.js";
import { verifyToken } from "../middleWare/auth.js";



const router = express.Router();

//READ
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

//UPDATE
router.patch("/:id/:friendID", verifyToken, addRemoveFriends);

export default router;