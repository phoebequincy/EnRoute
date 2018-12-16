'use strict'
const express = require('express')
const knex = require('../knex.js')


 // eslint-disable-next-line new-cap
const router = express.Router()

 // YOUR CODE HERE
 // get all
router.get('/', (req, res) => {
  knex('presents')
   .then((data) => {
     res.send(data)
   })
})

 // get a user
router.get('/:id', (req, res, next) => {
  knex('presents')
   .select('')
   .where('id', req.params.id)
   .then((data) => {
     res.send(data[0])
   })
   .catch((err) => {
     next(err)
   })
})

 // update user
router.post('/', (req, res, next) => {
  knex('presents')
   .insert(req.body)
   .returning('*')
   .then((data) => {
     res.send(data)
   })
   .catch((err) => {
     next(err)
   })
})

 // create a new user
router.patch('/:id', (req, res, next) => {
  knex('presents')
   .where('id', req.params.id)
   .update(req.body)
   .returning('*')
   .then((data) => {
     res.send(data)
   })
   .catch((err) => {
     next(err)
   })
})

// delete a user
router.delete('/:id', (req, res, next) => {
  knex('presents')
   .where('id', req.params.id)
   .returning('*')
   .del()
   .then((data) => {
     res.send(data[0])
   })
   .catch((err) => {
     next(err)
   })
})

module.exports = router
