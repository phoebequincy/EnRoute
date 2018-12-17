// 'use strict'
//
// const knex = require('../knex')
// const express = require('express');
// const router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next){
// return knex('vehicles')
//   .select('id', 'truck_number', 'type', 'care_level')
//   .then((result)=>{
//     res.status(200).send(result)
//   })
// })
//
// router.get('/:id', function(req, res, next){
//   return knex('vehicles')
//   .select('id', 'truck_number', 'type')
//   .where('id', req.params.id)
//   .then((result)=>{
//     res.status(200).send(result[0])
//   })
// })
//
// router.post('/', (req, res, next) =>{
//   return knex('vehicles')
//   .insert({
//   })
//   .returning('*')
//   .then((result)=>{
//     res.status(200).send(newObj)
//   })
// })
//
// router.patch('/:id', (req, res, next)=>{
//   const {truck_number, type, care_level} = req.body
//   knex('vehicles')
//     .where('id', req.params.id)
//     .update({truck_number, type, care_level})
//     .returning('*')
//     .then((result)=>{
//       delete result[0].created_at
//       delete result[0].updated_at
//       res.status(200).json(result[0])
//     })
// })
//
// router.delete('/:id', (req, res, next)=>{
//    knex('vehicles')
//     .where('id', req.params.id)
//     .first()
//     .del('*')
//     .then((result)=>{
//       delete result[0].created_at
//       delete result[0].updated_at
//       res.status(200).send(result[0])
//     })
// })
//
// module.exports = router;
