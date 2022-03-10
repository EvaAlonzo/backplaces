const {Schema, model} = require('mongoose');

const placeSchema = new Schema({
    title:{
        type: String,
        required: [true, "This file is required"]
    },
    direction:{
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