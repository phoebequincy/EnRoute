'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('password').notNullable()
    table.string('role').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
