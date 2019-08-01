const API_URL = "https://jsonplaceholder.typicode.com/users/"

async function fetchUsers(){
    var response = await fetch(API_URL)
    var users = await response.json();
    return users
    // console.log(users)
}

export default fetchUsers