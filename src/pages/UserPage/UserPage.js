import React, {Component} from 'react'
import getUserById from '../../services/UserService/getUserById'
class UserPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {}
        }
    }

    async componentDidMount(){
        console.log("User Page")
        let id = this.props.match.params.id
        var user  = await getUserById(id)
        this.setState({
            user: user
        })
    }

    render(){
        let user = this.state.user
        return(
            <div>
                <h2>Name: {user.name}</h2>
                <p>Username:{user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
        );
    }
}

export default UserPage