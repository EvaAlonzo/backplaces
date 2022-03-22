const User = require("../models/User.model");
const Upload = require("../helpers/cloudinary")
const {verifyToken} = require( "../middelware/util-mid")

//details places
exports.detaillUser = async(req, res, next)=>{
    try{
        const{id} = req.params
        const result = await User.findById(id)
        res.status(200).json({result})
        console.log("detail user")
        res.status(200).json({ message: "detail user"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//edit places
exports.editUser = async(req, res, next)=>{
    const id = req.params.id
        console.log("id",id)
    try{  
        // const userCreator = req.user
        // const userFromDB = await User.find({
        //     _userCreator: userCreator._id,
        //     _id:id
        // });
        // console.log("placesedit", userFromDB)
        // if(!placesFromDB.length){
        //     return res.status(401)({errorMessage: "you don't have permission"})
        // }

        // const updateUser = await User.findByIdAndUpdate( 
        //     id, 
        //     {...req.body})
            
        res.status(200).json({ message: "editPlaces" })
        
    } catch(error) {
        console.log("error", error)
        res.status(400).json({errorMessage:error})
    }
}


