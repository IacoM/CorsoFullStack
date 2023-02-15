import React from "react";
import { Welcome } from "./ConditionalRendering/5ConditionalRendering";
import { Counter } from "./State/1State";
// import { Hello } from "./4Component";

export class App extends React.Component {
    render(){
        return (
            <div>
                <Welcome name="John" age="17" />
                <Counter />
            </div>
        )
    }
}