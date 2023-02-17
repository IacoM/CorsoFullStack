import React from "react";
import { Welcome } from "../ConditionalRendering/5ConditionalRendering";

export class InteractiveWelcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
    
    render() {
        return  <div>
                    <input onChange={(e) => this.setState({name: e.target.value})}></input>
                    <Welcome name={this.state.name}/>
                </div>
    }
}