import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [],
        name: []
    }
    componentDidUpdate(){console.log(this.state)}
    
    render() {
        return <div>
            <ul>{}
                </ul>
            <input name="adder" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
            <button type="button" onClick={(e) => this.setState(this.state.name.map((item, index) => <li key={item + index}>{item}</li>))}>ADD</button>
        </div>
    }
}
