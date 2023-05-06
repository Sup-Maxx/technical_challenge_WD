const {Schema, model} = require("mongoose")
const mongoose = require("mongoose")

const phoneSchema = new Schema( 
    {
        id: Number,
        name: String,
        manufacturer: String,
        description: String,
        imageFileName: String,
        screen: String,
        processor: String,
        color: String,
        price: Number,
    }
)

const Phone = model("Phone", phoneSchema)

module.exports = Phone