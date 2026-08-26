import express from "express"
import cors from "cors"

const api = express()
const port = 3333

api.use(cors())

api.use(express.json())

api.get('/', (req, res) => {
    res.send({ message: "api funcionando"})
})

api.listen(port, () => {
    console.log("funcionando")
}) 