import React, {Component, Fragment} from 'react';
import './App.css';
import User from "./users/User";
import  UniqueId from "react-html-id";

const Temp  = (props) => {
    return (
        <Fragment>

            {
                props.greetings === 'hi' ?
                    <Fragment>&lt;div&gt;{props.greetings}&lt;/div&gt;</Fragment> :
                    <h1>{props.greetings}</h1>
            }

        </Fragment>
    )
};

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

    changeUserName = (id, e) => {
        const index = this.state.users.findIndex((user) => {
            return user.id === id;
        });
        const user = Object.assign({}, this.state.users[index]);
        user.name = e.target.value;
        const users = Object.assign([], this.state.users);
        users[index] = user;

        this.setState({users:users});
    };

    render() {
        return (
            <div className="App">
                <Temp greetings="hi"/>
            </div>
        );
    }
}

export default App;
