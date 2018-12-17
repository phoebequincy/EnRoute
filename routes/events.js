'use strict'

const express = require('express')
const knex = require('../knex.js')
const router = express.Router();


//get all events
router.get('/', function(req, res, next) {
  return knex('events')
  .select('id', 'location', 'description', 'date', 'time')
  .then ((result) => {
    res.status(200).json(result)
  })
})

//get one event
router.get('/:id', function(req, res, next) {
  return knex('events')
  .where('id', req.params.id)
  .select('id')
  .first()
  .then(data => {
    res.status(200).json(data)
  })
})

//get event coordinates
router.get('/:user', (req, res, next) => {
    return knex('events')
    .select('coordinates')
    .where(user_id, req.params.user)
    .then(data => {
      res.send(data)
    })
})

module.exports = router;
