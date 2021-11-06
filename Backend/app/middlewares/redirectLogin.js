import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../../keys.js'
import mongoose from 'mongoose'
const User = mongoose.model('User')

const redirectLogin = (req, res, next) => {
    const {authorization} = req.headers
    const token = authorization.split('=')[1]
    if (!token) return res.status(401).json({err: "You must be loggin"})
    jwt.verify(token,JWT_SECRET, (err, payload) => {
        if (err) return res.status(401).json({err: "You must be loggin"})
        const {_id} = payload
        User.findOne({_id})
        .then(user => {
            if (user) return req.user = user
        })
        .catch(err => console.log(err))
    })
    next()
}

export default redirectLogin