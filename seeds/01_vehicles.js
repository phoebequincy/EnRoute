exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function() {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 1, type: 'AMR'},
        {id: 2, type: 'Tri-Med'},
        {id: 3, type: 'OAS'}
        ])
        .then(() => {
          return knex.raw(
            `SELECT setval('vehicles_id_seq', (SELECT MAX(id) FROM vehicles));`
          )
        })
    })
}



// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }
