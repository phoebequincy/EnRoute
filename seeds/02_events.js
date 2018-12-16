exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function() {
      // Inserts seed entries
      return knex('events').insert([{
          id: 1,
          location: '1023 Walnut Street, Galvanize, Inc.',
          description: 'Cardiac arrest.',
          assigned_amb: 2,
          date: '11/14/18',
          time: '4:20pm',
          created_at: '2018-11-14T14:26:16.000Z',
          updated_at: '2018-11-14T14:26:16.000Z'

        }, {
          id: 2,
          location: '1850 Table Mesa Dr, Boulder, CO 80305, NCAR',
          description: 'Blocked airway.',
          assigned_amb: 1,
          date: '12/26/18',
          time: '2:23pm',
          created_at: '2018-12-26T14:26:16.000Z',
          updated_at: '2018-12-26T14:26:16.000Z'

        }])
        .then(() => {
          return knex.raw(
            `SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));`
          )
        })
    })
}
