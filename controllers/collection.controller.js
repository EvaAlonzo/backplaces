const Favorite = require("../models/Favorite.model");

//show
exports.findFavorites = async(req,res,next) => {
    try{
        const { _id:_client } = req.user
        const result = await Favorite.findOne({_client})
        res.status(200).json({result})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//create
exports.createFavorites = async (req, res, next) =>{
    try{
        const {_id:_client} = req.user
        const changes = {...req.body};
        const items = Collection.find({_client}).count();
        const action = items > 0 ? Favorite.findOneAndUpdate : Favorite.create;
        const args = items > 0 ?[{_client}, changes,{new:true}] : [changes];
        const result = await action(...args)
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//edit
exports.editFavorites = async (req, res, next) => {
    try{
        
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
}

//delete
// exports.deleteCollection = async (req,res, next) => {
//     try{
//         const {_id:_client} = req.user
//         await Collection.findOneAndDelete({_client})
//         res.status(200).json({result:"borrado"})
//     }catch(error){
//         res.status(400).json({errorMessage:error})
//     }
// }

//crear y editar favoritos