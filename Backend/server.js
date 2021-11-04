import express from 'express'
import cors from 'cors'
import pusher from 'pusher'
import mongoose  from 'mongoose'
// Routes
import initRoutes from './routes/web.js'

// app Configuration
const app = express()
const PORT = process.env.PORT || 8080

// Middlewares
app.use(express.json())
app.use(cors())

// DB Configuration
const DB_NAME = 'instagram-clone'
const PASSWORD = 'root'
const CONNECTION_URL = `mongodb+srv://admin:${PASSWORD}@cluster0.u41my.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('DB Is Connected')
})

// API Routes
initRoutes(app)


// Listener
app.listen(PORT, () => console.log(`Listening On localhost: ${PORT}`))