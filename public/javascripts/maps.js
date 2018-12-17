document.addEventListener('DOMContentLoaded', function(){

function initMap(){
  let fireIcon = {
url: "https://cdn.emojidex.com/emoji/seal/fire.png?1466441570", // url
scaledSize: new google.maps.Size(25, 25), // scaled size
origin: new google.maps.Point(0,0), // origin
anchor: new google.maps.Point(0, 0) // anchor
}

let ambIcon = {
url: "https://images.emojiterra.com/google/android-pie/512px/1f691.png", // url
scaledSize: new google.maps.Size(25, 25), // scaled size
origin: new google.maps.Point(0,0), // origin
anchor: new google.maps.Point(0, 0) // anchor
}

  let options = {
    zoom:15,
    center:{lat:40.0150, lng:-105.2705}
  }
  let map = new google.maps.Map(document.getElementById('map'), options)

// You can copy and paste this guy to add more fires!
addFire({lat:40.017500, lng:-105.280622})

addAmb({lat:40.013500, lng:-105.280622})

function addFire (coords){
  let marker = new google.maps.Marker({
    position:coords,
    map:map,
    icon:fireIcon
    })
  }

  function addAmb (coords){
    let marker = new google.maps.Marker({
      position:coords,
      map:map,
      icon:ambIcon
      })
    }

}
})
