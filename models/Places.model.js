const {Schema, model} = require('mongoose');

const placeSchema = new Schema({
    _userCreator: { type: Schema.Types.ObjectId, ref: "User"},
    title:{
        type: String,
        required: [true, "This file is required"]
    },
    address:{
        type: String,
        required: [true, "This file is required"]
    },
    description:{
        type: String,
        required: true,
    },
    images:{
        type:[String],
        min:[1, "This file is required"]
    },
    rating:{
        type: Number
    },
    status:{
        type: String,
        enum:["I Found","Want To visit", "Visited"],
        default: "I Found"
    }
},{
    timestamps: true
});

module.exports = model("Place", placeSchema)