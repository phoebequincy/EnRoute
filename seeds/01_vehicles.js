exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
  return knex('vehicles').insert([{
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
          `SELECT setval('vehicles_id_seq', (SELECT MAX(id) FROM vehicles));`
        )
      })
    })
}
