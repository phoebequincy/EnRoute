// get all
function getAllUsers(){
  return axios.get('/events')
}

// get event, return coords
function getCoords(userId){
return axios.post('/events/group/', {
	"userId":userId
})
}

//auth get token
function getToken(userId){
  return axios.get(`/token/${userId}`)
}
