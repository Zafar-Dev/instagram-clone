import mongoose from 'mongoose'

const instance = mongoose.Schema({
    user : String,
    caption : String,
    image : String,
    comments : []
})

export default mongoose.model('posts', instance)