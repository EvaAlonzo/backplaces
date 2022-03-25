const User = require("../models/User.model");
const Upload = require("../helpers/cloudinary")
const {verifyToken} = require( "../middelware/util-mid")

//details places
exports.detaillUser = async(req, res, next)=>{
    try{
        const{id} = req.params
        const result = await User.findById(id)
        res.status(200).json({ message: "detail user", result})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//edit user
exports.editUser = async(req, res, next)=>{
    const {_id} = req.body
    console.log("elbody", req.body)
    try{  
        const result = await User.findByIdAndUpdate( _id, {...req.body}, {new: true})
        res.status(200).json({result})
        
    } catch(error) {
        console.log("error", error)
        res.status(400).json({errorMessage:error})
    }
}


