import React from "react";

export class Welcome extends React.Component {
    render(){
        return  <div>
                    <p>Welcome, <strong>{this.props.name}</strong>!</p>
                    {this.props.age < 65 && this.props.name === "John" && <Age age={this.props.age}/>}
                </div>
    }
}

export class Age extends React.Component {
    render(){
        return <div>
                    {this.props.age >= 18
                        ? <p>Your age is {this.props.age}.</p>
                        : <p>Your are very young!</p>
                    }
                </div>
    }
}