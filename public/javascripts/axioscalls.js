// get all
function getAllUsers(){
  return axios.get('/events')
}
// get one event
function getOneUser(eventId){
return axios.get(`events/${eventId}`)


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
