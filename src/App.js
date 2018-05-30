import React, {Component, Fragment} from 'react';
import './App.css';
import Child from './components/parentToChild/Child';

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

        this.state = {
            name: "john"
        };

        console.log("constructor");
    }

    componentWillMount() {
        console.log("componentWillMount", window.innerWidth);

    }


    componentDidMount(){
        console.log("componentDidMount");

    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");

    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
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

    changeState = () => {
        this.setState({name:"Hill"})
    };

    unmountChild() {
        this.setState({name:"robert"});
    }

    render() {

        console.log("render");

        if(this.state.name === 'robert') {
            return (<div/>);
        }

        return (
            <div className="App">
                <div>parent name: {this.state.name}</div>
                <Child name={this.state.name}/>
                <button onClick={this.changeState.bind(this)}>Change state</button>
                <button onClick={this.unmountChild.bind(this)}>Unmount child</button>
            </div>
        );
    }
}

export default App;
