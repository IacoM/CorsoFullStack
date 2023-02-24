import React from "react";

export class Colors extends React.Component {
    render() {
        
        return <div>
                <ul>{this.props.colors.map((color, index) => 
                        <li key={name + index}>{color}</li>
                    )}
                </ul>
        </div> 
    }
}