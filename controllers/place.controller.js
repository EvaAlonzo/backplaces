const Place = require("../models/Places.model");
const Upload = require("../helpers/cloudinary")
const {verifyToken} = require( "../middelware/util-mid")

//createplaces
exports.createPlaces = async (req, res, next) => {
    console.log("ya llegamos", req.body)
            const userCreator = req.user
            const place = {...req.body};
            console.log("eluser", userCreator)
        try{
            const result = await Place.create({...place, _userCreator:userCreator._id})
            res.status(200).json({ result })
        }catch(error){
            res.status(400).json({errorMessage:error})
        }
};

//enlistplaces
exports.enlistPlaces = async(req, res, next) =>{
    try{
        const result = await Place.find()
        res.status(200).json({ message: "enlist places", result})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//details places
exports.detailPlaces = async(req, res, next)=>{
    try{
        const{id} = req.params
        const result = await Place.findById(id)
        res.status(200).json({result})
        console.log("detail places")
        res.status(200).json({ message: "detail places"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//edit places
exports.editPlaces = async(req, res, next)=>{
    const id = req.params.id
        console.log("id",id)
    try{  
        const userCreator = req.user
        const placesFromDB = await Place.find({
            _userCreator: userCreator._id,
            _id:id
        });
        console.log("placesedit", placesFromDB)
        if(!placesFromDB.length){
            return res.status(401)({errorMessage: "you don't have permission"})
        }

        const updatePlace = await Place.findByIdAndUpdate( 
            id, 
            {...req.body})
            
        res.status(200).json({ message: "editPlaces" })
        
    } catch(error) {
        console.log("error", error)
        res.status(400).json({errorMessage:error})
    }
}

//place delete
exports.deletePlaces = async (req, res, next) =>{
    const {id} = req.params

    try{
        await Place.findByIdAndDelete(id);
        res.redirect('/places');//aqui solo va sattus o mesnaje y se valida en el front
    } catch(error){
        res.status(400).json({errorMessage:error})
    }
}

