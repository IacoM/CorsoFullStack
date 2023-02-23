import React from "react";

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            remember: false,
        }
    }
    
    render() {
        return <div>
            <input onChange={(e) => this.setState({username: e.target.value})}></input>
            <input type="password" onChange={(e) => this.setState({password: e.target.value})}></input>
            <input type="checkbox" onChange={(e) => this.setState({remember: e.target.checked})}></input>
        </div>
    }
}