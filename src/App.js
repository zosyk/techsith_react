import React, {Component} from 'react';
import './App.css';
import User from "./users/User";
import  UniqueId from "react-html-id";

class App extends Component {

    constructor() {
        super();

        UniqueId.enableUniqueIds(this);
        this.state = {
            users: [
                {id: this.nextUniqueId(), name: 'john', age: 20},
                {id: this.nextUniqueId(), name: 'peter', age: 22},
                {id: this.nextUniqueId(), name: 'jill', age: 21}
            ]
        };

        console.log(this.state);
    }



    deleteUser = (index, event) => {
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);

        this.setState({users:users});
    };

``    changeUserName = (id, e) => {
        const index = this.state.users.findIndex((user) => {
            return user.id === id;
        });
        const user = Object.assign({}, this.state.users[index]);
        user.name = e.target.value;
        const users = Object.assign([], this.state.users);
        users[index] = user;

        this.setState({users:users});
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.users.map((user, index) => {

                            return <User
                                key={user.id}
                                age={user.age}
                                deleteEvent={this.deleteUser.bind(this, index)}
                                changeEvent={this.changeUserName.bind(this, user.id)}
                                >
                                    {user.name}
                                </User>
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default App;
