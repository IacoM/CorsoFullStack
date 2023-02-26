import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [],
        name: "",
    }
    handleButton = (e) => {
        console.log(e)
        const lego = this.state.items.push(this.state.name)
        this.setState(
            this.state.items.map((lego, index) => 
                <li key={index}>
                    {lego}
                </li>
            )
        ) 
    }
    componentDidUpdate(){console.log(this.state)}
    
    render() {
        return <div>
            <ul >{
                this.state.items.map((item, index) => 
                    <li key={index}>
                        {item}
                    </li>
            )}
                </ul>
            <input name="adder" defaultValue="" onChange={(e) => this.setState({name: e.target.value})}></input>
            <button type="button" onClick={this.handleButton}>ADD</button>
        </div>
    }
}
