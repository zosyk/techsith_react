import React, {Component} from 'react';

class Child extends Component {


    constructor() {
        super();

        this.state = {
            name: "john"
        };

        console.log(" child constructor");
    }

    componentWillMount() {
        console.log(" child componentWillMount", window.innerWidth);

    }


    componentDidMount(){
        console.log(" child componentDidMount");

    }

    componentWillReceiveProps() {
        console.log("child componentWillReceiveProps");

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(" child shouldComponentUpdate");
        return true;
    }

    componentWillUpdate() {
        console.log("child componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("child componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount");
    }


    render() {

        console.log(" child render");
        return (
            <div>
                child name: {this.props.name}
            </div>
        );
    }

    // return (
    //     <div>
    //         <button onClick={props.doWhatever}>{props.title}</button>
    //     </div>
    // )

};

export default Child;