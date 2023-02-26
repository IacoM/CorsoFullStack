import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [],
        name: ""
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
            <input name="adder" onChange={(e) => this.setState({name: e.target.value})}></input>
            <button type="button" onClick={() => {this.state.items.push(this.state.name)}} >ADD</button>
        </div>
    }
}
