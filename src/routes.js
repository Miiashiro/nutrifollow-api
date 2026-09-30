import express from "express"
import login from "./controller/loginController.js"
import mealPlan from "./controller/mealPlanController.js"
import mealRegister from "./controller/mealRegisterController.js"
import verifyToken from "./middleware/auth.js"

const route = express.Router()

route.use("/login", login)
route.use("/mealPlan", verifyToken, mealPlan)
route.use("/mealRegister", verifyToken, mealRegister)

export default route