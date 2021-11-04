
import post from '../models/dbModel.js'

const initRoutes = (app) => {

    app.get("/", (req, res) => res.status(200).send('Hello World'))
    app.post("/upload", (req, res) => {
        const body = req.body
        post.create(body, (err, data) => {
            if (err) res.status(500).send(err)
            else res.status(201).send(data)
        })
    })
    app.get('/sync', (req, res) => {
        post.find((err, data) => {
            if (err) res.status(500).send(err)
            else res.status(201).send(data)
        })
    })
}
export default initRoutes
