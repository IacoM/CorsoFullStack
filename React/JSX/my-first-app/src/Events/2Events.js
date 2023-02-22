import React, { Component } from "react";

export class ClickCounter extends React.Component{
    state = {
        count: this.props.initValue,
    }

    handleCounterIncrement = (event) => {
        console.log(event)

        this.setState((state) => {
            return {
                count: state.count + this.props.increment
            }
        })
    }

    render() {
        return <div>
                <h1>Count: {this.state.count}</h1>
                <CounterButton handle={this.handleCounterIncrement}/>
            </div>
    }
}


ClickCounter.defaultProps = {
    increment: 1,
    initValue: 0,
}

export class CounterButton extends React.Component {
    render() {
        return <button onClick={this.props.handle}>Increment</button>
    }
}