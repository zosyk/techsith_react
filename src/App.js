import React, {Component, Fragment} from 'react';
import './App.css';


//type guards

type TestType = {
    str: string,
    num?: number,
    arr: Array<number>,

}

type TestState = {
    message: string
}

class Test extends Component<TestType, TestState> {

    state = {
        message: "hi there"
    };

    static defaultProps = {
        str: "Default value"
    };

    h1:?HTMLHeadingElement;
    render() {

        return (
            <div>
                <h1>{this.props.str}</h1>
                <h1>{this.props.num}</h1>
                <h1>{this.props.arr.map(item => item + " ")}</h1>
                <h1 ref={h => this.h1 = h}>message state: {this.state.message}</h1>

            </div>

        );
    }
}

class App extends Component<{}> {

    render() {

        return (
            <div className="App">

                <Test  arr={[1,23,3]}/>
            </div>

        );
    }
}

export default App;
