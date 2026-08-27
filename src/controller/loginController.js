import express from "express"
import db from "../service/login.js"

const routes = express.Router()

routes.post('/', async(req, res) => {
    const {email, password} = req.body

    try{
        const users = await db.login(email, password)

        if(users.length > 0){
            return res.status(200).json({message: "Login efetuado com sucesso"})
        } else {
            return res.status(401).json({message: "E-mail ou senha inválidos"})
        }
    } catch(error){
        console.log(error)
        return res.status(500).json({message: "Erro ao efetuar login"})
    }
})

export default routes