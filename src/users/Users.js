import React, {Component} from 'react';
import User from "./User"


class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User age={20}>John</User>
                <User></User>
                <User age="25">Peter</User>
            </div>
        )
    }
}

export default Users;