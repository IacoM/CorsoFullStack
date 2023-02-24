import React from "react";

export class Colors extends React.Component {
    render() {
        
        return <div>
                <ul>{this.props.colors.map((color) => 
                        <li key={color.id}>{color.name}
                        {color.bought && <span>(Bought)</span>}
                        </li>
                    )}
                </ul>
        </div> 
    }
}