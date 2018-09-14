const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: String,
  description: String,
  author: String,
  rating: Number,
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:'Review'
    }
  ]
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
})

module.exports = mongoose.model('Book',bookSchema)