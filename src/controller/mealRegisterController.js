import express from "express"
import db from "../service/mealRegister.js"

const routes = express.Router()

routes.get("/", async(req, res) => {
    try{
        const result = await db.getRegister()
        return res.status(200).json(result)
    } catch(error){
        console.error(error)
        return res.status(500).json({erro: "Erro ao buscar plano de refeição"})
    }
})

export default routes