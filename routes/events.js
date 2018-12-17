'use strict'

const express = require('express')
const knex = require('../knex.js')
const router = express.Router();


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

//get event coordinates
router.get('/:id', (req, res, next) => {
    return knex('events')
    .where('u_id', req.params.id)
    .join('users', 'events.u_id', 'users_id' )
    .then(data => {
      res.send(data)
    })
})

router.get('/:id', (req, res, next) => {
    return knex('events')
    .where('events.u_id', req.params.id)
    // .join('users','events.u_id', 'user_id')
    .then(data => {
      res.status(200).json(data)
    })
})

module.exports = router;
