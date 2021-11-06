import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema.Types
const postSchema = mongoose.Schema({
    
    caption:{
        type: String,
        require: true
    },
    image:{
        type: String,
        default: "No Pic"
    },
    comments:{
        type: []
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
})

mongoose.model("Post", postSchema)