import React from "react";
import {profile, logout} from "../../services/UserService";

export default class Profile extends React.Component {

    state = {
        profile: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            roles: []
        }
    }

    componentDidMount() {
        profile()
            .then(profile => this.setState({
                profile: profile
            }))
    }

    logout = () =>
        logout()
            .then(status => {
                this.props.history.push('/')
            })

    render() {
        return(
            <div>
                <h1>Profile</h1>
                Hi {this.state.profile.username}!
                <hr/>
                <button
                    onClick={this.logout}
                    className={`btn btn-danger`}>
                    Logout
                </button>
            </div>
        )
    }
}
