'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments()
    table.string('address').notNullable()
    table.json('coordinates')notNullable()
    table.string('description').notNullable()
    table.integer('vehicle_id').unsigned()
    table.foreign('vehicle_id').references('events_vehicle_id_foreign')
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
