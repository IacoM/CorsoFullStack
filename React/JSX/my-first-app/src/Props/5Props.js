import React from "react";

export class Welcome extends React.Component {
    render(){
        return  <div>
                    <p>Welcome, <strong>{this.props.name}</strong>!</p>
                    <Age age="18"/>
                </div>
    }
}

export class Age extends React.Component {
    render(){
        return <p>Your age is {this.props.age}.</p>
    }
}