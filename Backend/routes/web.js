
import post from '../models/dbModel.js'
import authController from '../app/controllers/authController.js'
import homeController from '../app/controllers/homeController.js'
import redirectLogin from '../app/middlewares/redirectLogin.js'
import postController from '../app/controllers/postController.js'
const initRoutes = (app) => {

    // -- Authenticate --
    app.post('/signup', authController.signUp)
    app.post('/signin', authController.signIn)

    // -- Post CRUD --
    app.post('/createpost', redirectLogin, postController.createPost)
    app.get('/allposts', postController.getAllPosts)
    app.get('/posts', postController.getFollowersPosts)
    app.get('/myposts', redirectLogin, postController.getMyPosts)

    app.get('/',redirectLogin, homeController.index)

    // app.get("/", (req, res) => res.status(200).send('Hello World'))
    // app.post("/upload", (req, res) => {
    //     const body = req.body
    //     post.create(body, (err, data) => {
    //         if (err) res.status(500).send(err)
    //         else res.status(201).send(data)
    //     })
    // })
    // app.get('/sync', (req, res) => {
    //     post.find((err, data) => {
    //         if (err) res.status(500).send(err)
    //         else res.status(201).send(data)
    //     })
    // })
}
export default initRoutes
