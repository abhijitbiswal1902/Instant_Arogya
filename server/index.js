import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { UserRouter } from './routes/user.js'
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3001'],
  credentials: true,}));
app.use('/auth',UserRouter)
app.use(cookieParser())
mongoose.connect(process.env.MONGO_URI)

app.listen(process.env.PORT,()=>{
    console.log(`server running in the ${process.env.PORT}`)
})