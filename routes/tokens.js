'use strict'

const humps = require('humps')
const bcrypt = require('bcrypt')
const express = require('express')
const jwt = require('jsonwebtoken')
const knex = require('../knex.js')
const key = process.env.JWT_KEY
// eslint-disable-next-line new-cap
const router = express.Router()

// checks the user's cookie to see if there's a valid token
router.get('/token', (req, res) => {
  jwt.verify(req.cookies.token, key, (err) => {
    if (err) {
      res.send(false)
    }
    else {
      res.send(true)
    }
  })
})

router.post('/token', (req, res, next) => {
  let currentUser

  knex('users')
    .where('email', req.body.email)
    .select('*')
    .first()
    .then((userExists) => {
// if the user exists (user = true), enter this 'if' statement
      if (userExists) {
// assigns the user information from the 'users' database to currentUser
        currentUser = humps.camelizeKeys(userExists)

// bcrypt compare the submitted pswd to the stored pswd hash

        return bcrypt.compare(req.body.password, currentUser.hashedPassword)
      }

// if (user = false), the email doesn't exist in the database

      return next({ status: 400, message: 'Bad email or password' })
    })
    .then((passwordMatch) => {
// if pswds matched, result = true
      if (passwordMatch) {
// assigns, then hashes the JWT_KEY to the currentUser object
// to make it a unique identifier
        const token = jwt.sign(currentUser, key)

// adds the token to a cookie as a key:value pair with the modifier
// that only the server can access it adds the cookie to the response variable
        res.cookie('token', token, { httpOnly: true })

// remove the hashed password from the currentUser object for security reasons
        delete currentUser.hashedPassword

// the response gets sent back to the client with their user info and the cookie
        res.send(currentUser)
      }

// if the password was incorrect, it returns an error
      return next({ status: 400, message: 'Bad email or password' })
    })
})

router.delete('/token', (req, res) => {
  res.cookie('token', '', { httpOnly: true })
  .send()
})

module.exports = router
