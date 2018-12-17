'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments()
    table.integer('vehicle_id')
    table.string('type').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('vehicles')
}
