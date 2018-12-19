'use strict'

const express = require('express')
const knex = require('../knex.js')
const router = express.Router();


//get event coordinates
router.post('/group', (req, res, next) => {
  console.log("req.body.userId: ",req.body.userId)
    return knex('events')
    .select('lat','lng')
    .where('group', req.body.userId)
    .then(data => {
      res.status(200).json(data[0])
    })
    .catch(err => {
      console.log(err)
    })
})

//get all events
router.get('/', (req, res, next) => {
  return knex('events')
  .then(data => {
    res.status(200).json(data)
  })
})

//get one event
router.get('/:id', function(req, res, next) {
  return knex('events')
  .where('id', req.params.id)
  .first()
  .then(data => {
    res.status(200).json(data)
  })
})




module.exports = router;
