import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue,
        lastButton: ""
    }

    handleButtonTracker = (e) => {
        console.log(e.target.value)

        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy,
                lastButton: e.target.value
            }
        })
    }

    render() {
        const MyStyle = {
            color: '#993420',
            backgroundColor: 'grey',
        }
        return <div>
            <h2 style={MyStyle}>Count: {this.state.count}</h2>
            <ClickTracker handle={this.handleButtonTracker}/>
            <h1 >Last Button Clicked: {this.state.lastButton}</h1>
        </div>
    }
}

ClickCounter.defaultProps = {
    incrementBy: 1,
    initialValue: 0,
}

export class ClickTracker extends React.Component {
    render() {
        return <div>
            <button onClick={this.props.handle} value="Increment 1">Increment 1</button>
            <button onClick={this.props.handle} value="Increment 2">Increment 2</button>
            <button onClick={this.props.handle} value="Increment 3">Increment 3</button>
        </div>
    }
}