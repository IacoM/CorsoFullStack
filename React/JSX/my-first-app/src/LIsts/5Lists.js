import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [],
        name: "",
    }
    
    componentDidUpdate(){console.log(this.state)}
    
    render() {
        return <div>
            <ul>{
                this.state.items.map((el) => 
                    <li >
                        {el}
                    </li>
            )}
                </ul>
            <input name="adder" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
            <button type="button" onClick={() => {this.state.items.push(this.state.name); this.setState({name:""})}}>ADD</button>
            <button type="button" onClick={() => this.setState({items: []})}>RESET</button>
        </div>
    }
}