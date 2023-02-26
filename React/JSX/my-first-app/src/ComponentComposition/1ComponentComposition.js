import React from "react";

export class Container extends React.Component {
    render() {
        return <div class="composition">
            {this.props.children}
        </div>
    }
}