import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    
    inputRef = createRef();
    
    handleFormSubmit = (e) => {
        e.preventDefault()
        

        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const remember = e.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    componentDidMount() {
        this.inputRef.current.elements.username.focus()
    }
    
    render () {
        return <div>
            <h3>Uncontrolled Form</h3>
            
            <form onSubmit={this.handleFormSubmit} ref={this.inputRef} >
                <input name="username" placeholder="username" />
                <input name="password" type="password" placeholder="password" />
                <input name="remember" type="checkbox" />

                <button type="submit" >Login</button>
                <button type="reset" >Reset</button>
            </form>
        </div>
    }
}