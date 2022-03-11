const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const { createJWT, cleaRes, clearRes } = require("../middelware/util-mid");
exports.signupProcess = (req, res, next) => {
    const { email, password, confirmPassword, ...rest} = req.body;

    if(!email){
        return res.status(400).json({ errorMessage: "please, send a mail"})
    }
    if(password.lenght < 8){
        return res.status(400).json({
            errorMessage: "your password must have more than 8 characters"
        })
    }
    if(password != confirmPassword){
        return res.status(400).json({ errorMessage: "your passwords do not match"})
    }

    User.findOne({ email }).then((found) => {
        if(found){
            return res.status(400).json({ errorMessage: "your email is already in use"})
        }
        return bcrypt
        .genSalt(saltRounds)
        .then((salt) => bcrypt.hash(password,salt))
        .then((hashedPassword) => {
            return User.create({
                email,
                password: hashedPassword
            })
        })
        .then((user) => {
            const [header, payload, signature] =createJWT(user)

            res.cookie("headload", `${header}.${payload}`,{
                maxAge: 1000 * 60 * 30,
                httpOnly: true,
                sameSite: true,
                secure:false,
            })

            res.cookie("signature", signature,{
                httpOnly: true,
                sameSite: true,
                secure:false
            })
            const newUser = cleaRes(user.toObject())
            res.status(201).json({ user:newUser})
        })
        .catch((error) => {
            if(error instanceof mongoose.Error.ValidationError){
                return res.status(400).json({ errorMessage: error.message})
            }
            if(error.code === 11000){
                return res.status(400).json({
                    errorMessage: "Username need to be unique,The username you choose is already taken"
                })
            }
            return res.status(500).json({ errorMessage: error.message})
        })
    })
}

//login
exports.loginProcess = async (Req, res, next) => {
    try{
        const { email, password } = req.body;
        const user= await User.findOne({email})
        if(!user){
            return res
            .status(400)
            .json({ errorMessage: "your credentials do not match"})
        }
        const match = await bcrypt.compareSync(password,user.password)
        if(match){
            const [header, payload, signature] = createJWT(user)

            res.cookie("headload", `${header}.${payload}`, {
                maxAge: 1000 * 60 * 30,
                httpOnly: true,
                sameSite: true,
        secure:false,
            });
                res.cookie("signature", signature, {
                    httpOnly: true,
                    sameSite: true,
                    secure:false,
                });
            const newUser = clearRes(user.toObject())
            res.status(200).json({ user:newUser})
        }else{
            res.status(400).json({ errorMessage: "your credentials do not match"})
        }
    }catch(error){
        if( error instanceof mongoose.Error.ValidationError){
            return res.status(400).json({ errorMessage: error.message})
        }
        if (error.code === 11000){
            return res.status(400).json({
                errorMessage: "Error Message"
            })
        }
        return res.status(500).json({errorMessage: error.message})
    }
};

//logout
exports.logoutProcess = (req, res, next) => {
    res.clearCookie('headload')
    res.clearCookie("signature")
    res.status(200).json({ result: "Come back soon!"})
};

exports.getUserLogged = async (req, res, next) => {
    try{
        const { _id } = req.user
        const user = await User.findById(_id)
        const newUser = clearRes(user.toObject())
        res.status(200).json({ user: newUser})
    }catch(error){
        res.status(400).json({ errorMessage: error})
    }
}