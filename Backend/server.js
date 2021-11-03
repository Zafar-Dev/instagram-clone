import express from 'express'
import cors from 'cors'
import pusher from 'pusher'
import mongoose  from 'mongoose'

// app Configuration
const app = express()
const PORT = process.env.PORT || 8080

// Middlewares
app.use(express.json())
app.use(cors())

// DB Configuration

// API Routes
app.get("/", (req, res) => res.status(200).send('Hello World'))

// Listener
app.listen(PORT, () => console.log(`Listening On localhost: ${PORT}`))