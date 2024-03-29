import { Express } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = Express()

app.use(cors({
    origin: process.env.CORS_ORGIN,
    credentials: true
}))



app.use(Express.json({limit: "16kb"}))
app.use(Express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



export {app}