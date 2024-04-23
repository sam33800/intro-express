const express = require('express')
const router = express.Router()
const {getCoworking, postCoworking, getCoworkingId, putCoworkingId, deleteCoworkingId} = require('../controllers/coworkingController')


router
    .route('/')
    .get(getCoworking) 
    .post(postCoworking)


    router
    .route('/:id')
    .get(getCoworkingId)
    .put(putCoworkingId)
    .delete(deleteCoworkingId)

module.exports = router