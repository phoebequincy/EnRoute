'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments()
    table.string('location').notNullable()
    table.string('description').notNullable()
    table.string('date').notNullable()
    table.string('time').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('vehicles')
}
