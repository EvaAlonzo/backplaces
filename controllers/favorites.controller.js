const Favorite = require("../models/Favorite.model");

//show
exports.findFavorites = async(req,res,next) => {
    try{
        // const { _id:_client } = req.user
        // const result = await Favorite.findOne({_client})
        res.status(200).json({menssage: "findfav"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//create
exports.createFavorites = async (req, res, next) =>{
    try{
        // const {_id:_client} = req.user
        // const changes = {...req.body};
        // const items = Collection.find({_client}).count();
        // const action = items > 0 ? Favorite.findOneAndUpdate : Favorite.create;
        // const args = items > 0 ?[{_client}, changes,{new:true}] : [changes];
        // const result = await action(...args)
        // console.log("create favorites")
        res.status(200).json({ menssage: "createfav"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
};

//edit
exports.editFavorites = async (req, res, next) => {
    try{
        console.log("edit fav")
        res.status(200).json({ menssage: "edit fav"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
}

//delete
exports.deleteFavorites = async (req,res, next) => {
    try{
        // const {_id:_client} = req.user
        // await Collection.findOneAndDelete({_client})
        // res.status(200).json({result:"borrado"})
        console.log("delete fav")
        res.status(200).json({ menssage: "delete fav"})
    }catch(error){
        res.status(400).json({errorMessage:error})
    }
}

//crear y editar favoritos