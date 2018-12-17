document.addEventListener('DOMContentLoaded', function(){

  console.log("hello! ")


    let form = document.querySelector('form')


    form.addEventListener('submit', (event) => {
    event.preventDefault()

      let userId = form.userId.value

    getCoords(userId)
    .then(results => {
      console.log(results.data)

      let eventCoords = {
        lat: data.event.lat,
        lng: data.event.lng
      }

      res.redirect(200,'../map.html')
    })
  })












})
