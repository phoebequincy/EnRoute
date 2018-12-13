'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments()
    table.integer('truck_number').notNullable()
    table.string('type').notNullable()
    table.integer('care_level').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('vehicles')
}
