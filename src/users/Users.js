import React, {Component} from 'react';
import User from "./User"


class Users extends Component {

    state = {
        users: [
            {name: "John", age: 20},
            {name: "Peter", age: 21}
        ],
        title: "User List12"
    };

    makeMeYounger = () => {
        const newState = this.state.users.map((user) => {
            if (user.age > 10) {
                user.age -= 10;
            }

            return user;
        });

        this.setState(newState)
    };

    render() {
        return (
            <div>
                <br/>
                <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
                <br/>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user) => {
                        return <User age={user.age}>{user.name}</User>
                    })
                }
            </div>
        )
    }
}

export default Users;