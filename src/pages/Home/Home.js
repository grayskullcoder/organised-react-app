import React, {Component} from 'react';
import fetchUsers from '../../services/UserService/UserService'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(){
        super();
        this.state = {
            users : []
        }
    };

async componentDidMount() {
    console.log("Home Page");
    var data = await fetchUsers()
    this.setState({
        users: data
    })
    console.log(this.state.user)
}


renderUsers = ()=>{
    return this.state.users.map(user => {
        return(
            <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
        )
    })
}

render(){
    return(
        <div>
            <ul>{this.renderUsers()}</ul>
        </div>
    );
}

}
export default Home