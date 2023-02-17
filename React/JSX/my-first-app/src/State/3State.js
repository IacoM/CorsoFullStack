import React from "react";

export class Counter extends React.Component{
    state = {
        count: this.props.initValue,
    }

    constructor(props){
        super(props)
        
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.increment),
                }
            })
        }, this.props.intervalTime)
    }

    render() {
        return <CounterDisplay countValue={this.state.count}/>
    }
}

export class CounterDisplay extends React.Component {
    render() {
        return <h1>Count: {this.props.countValue}</h1>
    }
}

Counter.defaultProps = {
    intervalTime: 1000,
    increment: 1,
    initValue: 0,
}