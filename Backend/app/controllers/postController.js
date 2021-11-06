import mongoose from "mongoose"
import '../../models/post.js'
const Post = mongoose.model("Post")

const postController = () => {
    return {
        createPost(req, res){
            const {caption} = req.body
            if (!caption) return res.status(422).json({message: "Fields can't be Empty"})
            const post = new Post({
                caption,
                postedBy: req.user
            })
            post.save()
            .then(result => res.status(201).json({result}))
            .catch(err => console.log(err))
            
        }
    }
}
export default postController()