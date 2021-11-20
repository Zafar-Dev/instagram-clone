import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import '../../models/user.js'
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../../keys.js'
const User = mongoose.model('User')

const authController = () => {
    return {
        async signUp(req, res){
            const {fullName, userName, email, password} = req.body
                       
            // Check for Empty Fields
            if (!fullName || !userName || !email || !password) res.status(422).json({message: 'Field cannot be Empty!'})
            else {
                // Hash Password
                const hashPassword = await bcrypt.hash(password,12) 
                // Check Username
                User.findOne({userName})
                .then(exitUserName => {
                    if (exitUserName)  res.status(422).json({message: "Username already taken"})
                    else {
                        // Check Email
                        User.findOne({email})
                        .then(exitEmail => {
                            if (exitEmail)  res.status(422).json({message: "User is already register with that Email."})
                            else {                                
                                // Save User data in DB
                                const user = new User({
                                    fullName,
                                    userName,
                                    email,
                                    password: hashPassword
                                })
                                user.save()
                                .then(user => res.status(201).json({message: "Saved Successfully"}))
                                .catch(err => console.log(err))
                            }
                            
                        })
                        .catch(err => console.log(err))
                    }
                    
                })
                .catch(err => console.log(err))
            }
        },
        async signIn(req, res){
            console.log(req.body)
            const {email, password} = req.body
            if (!email || !password) return res.status(422).json({message: 'Field cannot be Empty!'})
            //Check for email
            User.findOne({email})
            .then(user => {
                if (!user) return res.status(401).json({message: "Invalid Email"})
                bcrypt.compare(password, user.password)
                .then(isCorrect => {
                    if(isCorrect) {
                        const token = jwt.sign({_id: user._id}, JWT_SECRET)
                        const {_id, fullname, email} = user
                        return res.status(200).json({token, user:{_id, fullname, email}})
                    }
                    return res.status(401).json({message: "Invalid Password"})
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err)) 
        }
    }
}

export default authController()