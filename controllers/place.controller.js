const PlacesModel = require("../models/Places.model");
const Place = require("../models/Places.model");

exports.createPlaces = (req, res, next) => {
        // const place = {...req.body};
    
        // Place.create(place)
        // .then(result => res.status(200).json({result}))
        // .catch(error=>res.status(400).json({errorMessage:error}))
        try{
            console.log("createplaces")
        res.status(200).json({ menssage: "createplaces"})
        }catch(error){
            res.status(400).json({errorMessage:error})
        }
        
    
};

exports.enlistPlaces = async(req, res, next) =>{
    try{
        // const result = await PlacesModel.find()
        // res.status(200).json({result})
        console.log("enlist places")
        res.status(200).json({ menssage: "edit places"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

exports.detailPlaces = async(req, res, next)=>{
    try{
        // const{id} = req.params
        // const result = await Product.findById(id)
        // res.status(200).json({result})
        console.log("detail places")
        res.status(200).json({ menssage: "detail places"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

