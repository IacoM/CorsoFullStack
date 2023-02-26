import React from "react";

export class Container extends React.Component {
    render() {
        return <div class="composition">
            <div>
                {this.props.title}
            </div>
            <div>
                {this.props.children}
            </div>
        </div>
    }
}