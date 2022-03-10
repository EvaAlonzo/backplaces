const {Schema, model} = require('mongoose');

const favoritesSchema = new Schema({
    _user:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    _items:{
        type:[{
            places: Schema.Types.ObjectId,
        }]
    }
},
{timestamps:true})

module.exports = model("Favorite", favoritesSchema )