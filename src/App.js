import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        name: "test name"
    };

    changeName = (newName) => {
        this.setState({
            name: newName
        });
    };

    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value
        });
    };

  render() {
    return (
        <div className="App">
            <br/><br/>
            <button onClick={() => this.changeName("anon func")}>Change state using anonymous function</button>
            <br/>
            <button onClick={this.changeName.bind(this, "bind")}>Change state using bind method</button>
            <br/><br/>
            <input type="text"  onChange={this.changeNameFromInput} value={this.state.name}/>
            <div>{this.state.name}</div>
        </div>
    );
  }
}

export default App;
