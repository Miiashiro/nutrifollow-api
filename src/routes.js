import express from "express"
import login from "./controller/loginController.js"

const route = express.Router()

route.use("/login", login)

export default route