exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function() {
      // Inserts seed entries
      return knex('events').insert([{
          id: 1,
          vehicle_id: 2,
          address: '1023 Walnut Street, Galvanize, Inc.',
          coordinates: {
            lat: 40.016760,
            lng: -105.281720
          },
          description: 'CARDIAC ARREST',
          date: '11/14/18',
          time: '4:20pm',
          created_at: '2018-11-14T14:26:16.000Z',
          updated_at: '2018-11-14T14:26:16.000Z'

        }, {
          id: 2,
          vehicle_id: 1,
          address: '1850 Table Mesa Dr, Boulder, CO 80305, NCAR',
          description: 'BLOCKED AIRWAY',
          coordinates: {
            lat: 39.980190,
            lng: -105.279770,
          },
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
