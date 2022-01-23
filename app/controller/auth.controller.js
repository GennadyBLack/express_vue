import bcrypt from 'bcrypt'
const rounds = 10
import jwt from 'jsonwebtoken'
const tokenSecret = "my-token-secret"
const db = require('../config/db.config.js')
const User = db.user


// login
exports.login = async(req, res) => {

const {email,password} = req.body.user
await User.findOne({ where: { email: email } })
.then(user => {
    if(!user) res.status(404).json({errors: 'no user with that email found'})
    else {
        bcrypt.compare(password, user.password, (errors, match) => {
            if (errors) res.status(500).json(errors)
            else if (match) res.status(200).json({token: generateToken(user),user:user})
            else res.status(403).json({errors: 'passwords do not match'})
        })
    }
})
.catch(error => {
    res.status(500).json(error)
})

};
 

// register
exports.register = async (req, res) => {
    const {username,password,email} = req.body.user
    bcrypt.hash(password, rounds, (error, hash) => {
        if (error) res.status(500).json(error)
        else {
            const newUser =  User.build({email: email, password: hash,username:username})
            newUser.save()
                .then(user => {
                    res.status(200).json({token: generateToken(user),user:user})
                })
                .catch(errors => {
                    res.status(500).json(errors)
                })
        }
    })
    
    };
     
function generateToken(user){
    return jwt.sign({data: user}, tokenSecret, {expiresIn: '24h'})
}