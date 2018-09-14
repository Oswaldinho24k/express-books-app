const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

//list

router.get('/', (req, res, next)=>{
  const {search} = req.query
  if(search){
    Book.find({title:{$regex : search, $options:'i'}})
    .then(books=>{
      res.render('books-list',{books})
    }).catch(e=>next(e))
  }else{
    Book.find()
      .then(books=>{
        res.render('books-list',{books})
      })
  }
})

//detalle

router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Book.findById(id)
    .then(book=>{
      res.render('book-detail',book)
    }).catch(e=>{
      console.log(e)
      next(e)
    })
})


module.exports = router