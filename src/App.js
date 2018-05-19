import React, {Component} from 'react';
import './App.css';
import Parent from './components/parentToChild/parent';

class App extends Component {
    state = {
        title: "title for child"
    };

    changeTheWorld = (newTitle) => {
        this.setState({title: newTitle})
    };

    render() {
        return (
            <div className="App">
                <Parent title={this.state.title} leaveTheWorldTheSame={this.changeTheWorld.bind(this, "the same world")}
                        doWhatever={this.changeTheWorld.bind(this, "new world title")}/>
            </div>
        );
    }
}

export default App;
