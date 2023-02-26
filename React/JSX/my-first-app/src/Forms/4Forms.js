import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        })
    }

    onLogin = () => {
        console.log(this.state)
    }

    handleReset = (e) => {
        this.setState({
            username: "",
            password: "",
            remember: false
        })
    }

    componentDidUpdate()  {
        console.log(this.state)
    }
    
    render() {
        const LoginStyle = {
            backgroundColor: this.state.password.length > 8 ? 'green' : 'red',
        }
        
        return <div>
            <input name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange}></input>
            <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}></input>
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}></input>
            <button onClick={this.handleReset}>Reset</button>
            {this.state.username && this.state.password
                ? <button onClick={this.onLogin} style={LoginStyle}>Login</button>
                : <button disabled style={LoginStyle}>Login</button>
            }
        </div>
    }
}
