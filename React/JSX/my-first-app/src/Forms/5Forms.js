import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    
    
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
    
    
    render () {
        
        return <div>
            <h3>Uncontrolled Form</h3>
            
            <form onSubmit={this.handleFormSubmit} >
                <input name="username" placeholder="username" />
                <input name="password" type="password" placeholder="password" />
                <input name="remember" type="checkbox" />

                <button type="submit" >Login</button>
                <button type="reset" >Reset</button>
                    
            </form>
        </div>
    }
                
}
                

        