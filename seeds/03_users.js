exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          user_id: 'FL74001',
          password: '$2a$04$tJvvO7jNqLYE12RY3q4KgOy6yIKfrX1LabPHZDWOazoJt6Lx1MX2a',
          role: 'fire',

        }, {
          user_id: 'FE74002',
          password: '$2a$04$0PuV/0JUxXDoxtBpriYJn.NtprrF0Avxv45tLi5NtHkFRbD7AIgJO',
          role: 'fire',

        }, {
          user_id: 'FE46001',
          password: '$2a$04$l1Q8qSFXpdz98yEqjHvIvub8LDg1L17HlpSEWG/Oy4CDKK7iwnu3a',
          role: 'fire',
          }])
        .then(() => {
          return knex.raw(
            `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
          )
        })
    })
}
