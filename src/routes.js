import express from "express"
import login from "./controller/loginController.js"
import mealPlan from "./controller/mealPlanController.js"
import mealRegister from "./controller/mealRegisterController.js"

const route = express.Router()

route.use("/login", login)
route.use("/mealPlan", mealPlan)
route.use("/mealRegister", mealRegister)

export default route