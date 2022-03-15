const Place = require("../models/Places.model");
const Upload = require("../helpers/cloudinary")

//createplaces
exports.createPlaces = async (req, res, next) => {
        try{
            const place = {...req.body};
            const result = await Place.create(place)
            res.status(200).json({ result })
        }catch(error){
            res.status(400).json({errorMessage:error})
        }
};

//enlistplaces
exports.enlistPlaces = async(req, res, next) =>{
    try{
        const result = await Place.find()
        res.status(200).json({result})
        console.log("enlist places")
        res.status(200).json({ menssage: "edit places"})
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
        res.status(200).json({ menssage: "detail places"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//edit places
// exports.editPlaces = async(req, res, next)=>{
//     const{id} = req.params
//     const {
//         title,
//         direction,
//         description,
//         images,
//         rating,
//         status
//     } = req.body

//     let picture
//     try{
        
//         // const userCreator = req.session.curretUser._id
//         // const placesFromDB = await Place.find({
//         //     _userCreator: creatorUser
//         // })
//         // if (placesFromDB.length === 0){
//         //     zeroPlaces = true
//         // }
//         // res.render("places/place", { 
//         //     place: placesFromDB
//         // }) 

//         //arriba el get de placesedit?

//         if (req.file){
//             picture = req.file.path
//         }

        
//         res.status(200).json({ menssage: "editplaces"})
//     }catch(error){
//         res.status(400).json({errorMessage:error})
//     }
// }

//place delete
exports.deletePlaces = async (req, res, next) =>{
    const {id} = req.params

    try{
        await Place.findByIdAndDelete(id);
        res.redirect('/places');
    } catch(error){
        res.status(400).json({errorMessage:error})
    }
}

