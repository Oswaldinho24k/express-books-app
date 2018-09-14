const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  texto:String,
  author:String
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

module.exports = mongoose.model('Review',reviewSchema)