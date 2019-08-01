
async function getUserById(id){
    var response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    var user = await response.json()
    return user
}

export default getUserById