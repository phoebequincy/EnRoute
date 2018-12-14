'use strict'

const knex = require('../knex')
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
return knex('vehicles')
  .select('id', 'truck_number', 'type', 'care_level')
  .then((result)=>{
    res.status(200).send(result)
  })
})

router.get('/:id', function(req, res, next){
  return knex('vehicles')
  .select('id', 'truck_number', 'type', 'care_level')
  .where('id', req.params.id)
  .then((result)=>{
    res.status(200).send(result[0])
  })
})

router.post('/', (req, res, next) =>{
  return knex('vehicles')
  .insert({
    truck_number:req.body.truck_number,
    type:req.body.type,
    care_level:req.body.care_level
  })
  .returning('*')
  .then((result)=>{
    let newObj={}
    newObj.id=result[0].id
    newObj.truck_number=result[0].truck_number
    newObj.type=result[0].type
    newObj.care_level=result[0].care_level
    res.status(200).send(newObj)
  })
})
module.exports = router;
