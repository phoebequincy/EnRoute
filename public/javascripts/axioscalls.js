// get all
function getAllUsers(){
  return axios.get('/events')
}

// get event, return coords
function getCoords(userId){
return axios.get(`events/${userId}`)


//auth get token
function getToken(userId){
  return axios.get(`/token/${userId}`)
}


//get the foreign API
// function getForeignApi(){
//   return axios.get('')
// }
//create a new user
// function createNewUser(event){
//   return axios.post('/events', event)
// }
// //delete a user
// function deleteUser(eventId){
//   return axios.delete(`/events/${eventId}`)
// }

// }
// //update user
// function updateUser(event){
//   return axios.patch(`/events/${event.id}`, event)
// }
