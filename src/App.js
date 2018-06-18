import React, {Component, Fragment} from 'react';
import './App.css';
import Child from './components/parentToChild/Child';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from "react-router-dom";
import Route from "react-router-dom/Route";

const User = (params) => {
    return (
        <h1>Welcome User {params.username}</h1>
    )
};



class App extends Component {

    onClick = () => {
        console.log(this.firstName.value)
    };

    state={
        loggedIn:false
    };

    loginHandle =() =>  {
      this.setState(prevState => (
          {
              loggedIn: !prevState.loggedIn
          }
      ))
    };

    render() {

        return (

            <Router>
                <div className="App">

                    <div>
                        <span>First Name:</span>
                        <input onKeyUp={this.onKeyUp.bind(this, 'firstName')} ref={(input) => {this.firstName = input}} type="text"/>
                    </div>
                    <div>
                        <span>Last Name:</span>
                        <input onKeyUp={this.onKeyUp.bind(this, 'lastName')} ref={(input) => {this.lastName = input}} type="text"/>
                    </div>
                    <div>
                        <span>Age:</span>
                        <input onKeyUp={this.onKeyUp.bind(this, 'age')} ref={(input) => {this.age = input}} type="text"/>
                    </div>
                    <div>
                        <input onKeyUp={this.onKeyUp.bind(this, 'submit')} type="submit" ref={(input) => {this.submit = input}} value="submit" onClick={this.onClick} />
                    </div>
                </div>
            </Router>
        );
    }

    onKeyUp = (target, e) => {
        if(e.keyCode === 13) {
            switch (target) {
                case 'firstName':
                    this.lastName.focus();
                    break;
                case 'lastName':
                    this.age.focus();
                    break;
                case 'age':
                    this.submit.focus();
                    break;
                default:
                    this.firstName.focus();
            }
        }
    }
}

export default App;
