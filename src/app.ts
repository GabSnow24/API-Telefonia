import express from 'express'
import http from 'http'
import cors from 'cors'
import { ClientRoutes } from "./routes/ClientRoutes"
import { TaxRoutes } from "./routes/TaxRoutes"
import { PlanRoutes } from "./routes/PlanRoutes"
import { AuthenticableRoutes } from "./routes/AuthenticableRoutes"


const app = express()
app.use(cors())

const serverHttp = http.createServer(app)

app.use(express.json())

app.use(ClientRoutes)
app.use(TaxRoutes)
app.use(PlanRoutes)
app.use(AuthenticableRoutes)



export {  serverHttp, app }