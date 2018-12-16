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

// //create a new event
// router.post('/', function(req, res, next) {
//   knex('events')
//   .insert({
//     id: req.body.id,
//     location: req.body.location,
//     description: req.body.description,
//     date: req.body.date,
//     time: req.body.time
//   })
//   .returning(['id', 'location', 'description', 'date', 'time'])
//   .then(data => {
//     res.status(200).json(data[0])
//   })
// })
// //updates an event by id - a complete replacement of the event
// router.put('/:id', function(req, res, next){
//   knex('events')
// .where('id', req.params.id)
// .update(req.body)
// .returning(['id','location', 'description', 'date', 'time'])
// .then(data => {
//   res.send(data[0])
// })
//
//
// })
// //updates an event by id - a modification of the event
// router.patch('/:id', function(req, res, next) {
//   knex('events')
//   .where('id', req.params.id)
//   .update(req.body)
//   .returning(['id','location', 'description', 'date', 'time'])
//   .then(data => {
//     res.send(data[0])
//   })
// })
// //deletes an event by id
// router.delete('/:id', function(req, res, next) {
//   knex('events')
//   .where('id', req.params.id)
//   .returning(['id', 'location', 'description', 'date', 'time'])
//   .del()
//   .then(data => {
//     if (!data) {
//       res.send("not found")
//     } else {
//       res.status(200).json(data[0])
//     }
//   })
// })
//
module.exports = router;
