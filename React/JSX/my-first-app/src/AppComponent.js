import React from "react";
import { Welcome } from "./ConditionalRendering/5ConditionalRendering";
import { InteractiveWelcome } from "./Forms/1Forms";
import { Counter } from "./ComponentLifecycle/1ComponentLifecycle";
// import { Hello } from "./4Component";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" age="64"/>
                <Counter />
            </div>
        )
    }
}