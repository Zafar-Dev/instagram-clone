import mongoose from "mongoose"
import '../../models/post.js'
const Post = mongoose.model("Post")

const postController = () => {
    return {
        createPost(req, res){
            const {image, caption} = req.body
            console.log(req.body)
            if (!image) return res.status(422).json({message: "Select an Image!"})
            const post = new Post({
                image,
                caption,
                postedBy: req.user
            })
            post.save()
            .then(result => res.status(201).json({result}))
            .catch(err => console.log(err))
            
        },
        getAllPosts(req, res){
            Post.find()
            .populate("postedBy", "_id, userName")
            .then(posts => res.status(200).json({posts}))
            .catch(err => console.log(err))
        },
        getFollowersPosts(req, res){
            Post.find()
            .populate("postedBy", "_id, userName")
            .then(posts => res.status(200).json({posts}))
            .catch(err => console.log(err))
        },
        getMyPosts(req, res){
            Post.find({postedBy: req.user._id})
            .populate("postedBy", "_id, userName")
            .then(posts => res.status(200).json({posts}))
            .catch(err => console.log(err))
        }
    }
}
export default postController()