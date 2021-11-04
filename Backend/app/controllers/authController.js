import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import '../../models/user.js'
const User = mongoose.model('User')

const authController = () => {
    return {
        async signUp(req, res){
            const {fullName, userName, email, password} = req.body
            // Hash Password
            const hashPassword = await bcrypt.hash(password,12)
            console.log(hashPassword)
            // Check for Empty Fields
            if (!fullName || !userName || !email || !password) res.status(422).json({error: 'Field cannot be Empty!'})
            else {
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
                                // UserName and Email is Unique
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
        }
    }
}

export default authController()