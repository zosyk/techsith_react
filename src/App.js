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

                    <ul>
                        <li>
                            <NavLink exact activeStyle={
                                {color:'green'}
                            } to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact  activeStyle={
                                {color:'green'}
                            } to="/about/">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeStyle={
                                {color:'green'}
                            } to="/user/Steave">User Steave</NavLink>
                        </li>
                    </ul>

                    <Prompt when={!this.state.loggedIn} message={
                        (location)=> {
                            return location.pathname.startsWith('/user') ? "Are you sure?" : true
                        }
                    }/>
                    <input type="button" onClick={this.loginHandle.bind(this)} value={this.state.loggedIn ? "Log out" : "Log in"}/>

                    <Route path="/" exact strict={true} render={
                        () => {
                            return (
                                <h1>Welcome Home</h1>
                            )
                        }
                    }/>
                    <Route path="/about/" exact={true} strict render={
                        () => {
                            return (
                                <h1>Welcome About</h1>
                            )
                        }
                    }/>

                    <Route path="/user/:username" exact={true} strict render={({match}) => {
                        return this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)}
                    }/>

                </div>
            </Router>
        );
    }
}

export default App;
