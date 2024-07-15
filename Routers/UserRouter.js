import express from "express";
import { CreateUser, DeleteUser, GetUser, UpdateUser } from "../Controllers/UserControllers.js";

const router = express.Router()


router.get("/get-user",GetUser)
router.post("/create-user",CreateUser)
router.put("/Update-user/:id",UpdateUser)
router.delete("/del-user/:id",DeleteUser)



export default router;