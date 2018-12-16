'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments()
    table.string('address').notNullable()
    table.json('coordinates')notNullable()
    table.string('description').notNullable()
    table.integer('truck_number').unsigned()
    table.foreign('truck_number').references('events_truck_number_foreign')
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.string('date').notNullable()
    table.string('time').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('events')
}
