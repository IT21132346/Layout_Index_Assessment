const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    
    mainMenu:{
        type:String,
        required: true
    },
    subMenu:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model('Category',categorySchema)

//Category.find()