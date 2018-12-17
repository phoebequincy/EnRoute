exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
<<<<<<< HEAD
    .then(function () {
      // Inserts seed entries
  return knex('users').insert([{
  id:1,
  truck_number:1,
  type:'Tri-Med AMB',
  care_level: 2,
  created_at: '2016-06-26T14:26:16.000Z',
  updated_at: '2016-06-26T14:26:16.000Z'

},{
  id:2,
  truck_number:2,
  type:'AMR AMB',
  care_level: 2,
  created_at: '2018-12-26T14:26:16.000Z',
  updated_at: '2018-12-26T14:26:16.000Z'

},{
  id:3,
  truck_number:74,
  type:'Puget Sound Fire, Ladder',
  care_level: 1,
  created_at: '2018-12-26T14:26:16.000Z',
  updated_at: '2018-12-26T14:26:16.000Z'

}])
      .then(() => {
        return knex.raw(
          `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
        )
      })
=======
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
>>>>>>> c7f82ae49308b2ae16bbb235ade5d855a80d4b10
    })
}
