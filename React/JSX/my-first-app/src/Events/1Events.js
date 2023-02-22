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
                <button onClick={this.handleCounterIncrement}>Increment</button>
            </div>
    }
}


ClickCounter.defaultProps = {
    increment: 1,
    initValue: 0,
}