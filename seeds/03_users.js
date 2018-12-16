exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          id: FL74001,
          password: '',
          role: 'fire',

        }, {
          id: FE74002,
          password: '',
          role: 'fire',

        }, {
          id: FE46001,
          password: '',
          role: 'fire',
          }])
        .then(() => {
          return knex.raw(
            `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
          )
        })
    })
}
