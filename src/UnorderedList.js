import React, { Component } from 'react';
import List from './List';
// const timestamp = new Date();
// console.log(timestamp);

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            times: []
        }
    }
    render(){
        return(
            <div>
            <button onClick={this._addTime}>Your Answer</button> 
            <button onClick ={this._clear}>Clear Answers</button>   
            <List times={this.state.times} />
            </div>
        );
    }

    _addTime = () => {
        // this.state.times.push(this.state.timestamp);
        this.setState({
            times: [...this.state.times, new Date()]
        })
    }

    _clear = () => {
        this.setState({
            times: []
        })
    }
}

export default Main;