const express = require('express')
const router = express.Router()
const Review = require('../models/Review')
const Book = require('../models/Book')


router.get('/new/:bookId', (req, res, next)=>{
  const {bookId} = req.params
  res.render('review-form',{bookId})
})

router.post('/new/:bookId', (req, res, next)=>{
  const {bookId} = req.params
  Review.create(req.body)
    .then(review=>{
      Book.findByIdAndUpdate(bookId,{$push:{reviews:review._id}})
        .then(book=>{
          res.redirect(`/books/detail/${bookId}`)
        }).catch(e=>next(e))
    }).catch(e=>next(e))
})






module.exports = router