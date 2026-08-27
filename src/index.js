import express from "express"
import cors from "cors"
import route from "./routes.js"

const api = express()
const port = 3333

api.use(cors())

api.use(express.json())

api.use('/', route)

api.listen(port, () => {
    console.log("funcionando")
}) 