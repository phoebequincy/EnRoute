exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function() {
      // Inserts seed entries
      return knex('events').insert([{
          id: 1,
          vehicle_id: 2,
          address: '1750 13th St, Boulder, CO 80302, BMOCA',
          lat: '40.015186',
          lng: '-105.2772766',
          description: 'CARDIAC ARREST',
          group: 'demo1',
          date: '11/14/18',
          time: '4:20pm',
          created_at: '2018-11-14T14:26:16.000Z',
          updated_at: '2018-11-14T14:26:16.000Z'

        }, {
          id: 2,
          vehicle_id: 1,
          address: '2032 14th St, Boulder, CO 80302, The Boulder Theater',
          description: 'BLOCKED AIRWAY',
          group: 'demo2',
          lat: '40.0191723',
          lng: '-105.27735560000002',
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
