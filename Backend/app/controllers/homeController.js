
const homeController = () => {
    return { 
        index(req, res){
            res.status(200).send('Hello World')
        }
    }
}

export default homeController()