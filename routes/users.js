'use strict'

const express = require('express')
const knex = require('../knex.js')
const humps = require('humps')
const bcrypt = require('bcryptjs')

// eslint-disable-next-line new-cap
const router = express.Router()

// YOUR CODE HERE
router.post('/users', (req, res) => {
  const body = humps.decamelizeKeys(req.body)
  const pw = body.password
  const hashedpw = bcrypt.hashSync(pw, 1)



  return knex('users')
   .insert({
     id: user[0].id,
     hashed_password: hashedpw
   }, '*')

   .then((user) => {
     res.status(200).json({
       id: user[0].id,
       hashed_password: hashedpw
     })
   })
})

module.exports = router
