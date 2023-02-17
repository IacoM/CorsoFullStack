import React from "react";
import { Welcome } from "./ConditionalRendering/5ConditionalRendering";
import { InteractiveWelcome } from "./Forms/1Forms";
import { Counter } from "./State/3State";
import { CounterDisplay } from "./State/3State";
// import { Hello } from "./4Component";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" age="64"/>
                <Counter initValue={20} increment={2} intervalTime={2000}/>
            </div>
        )
    }
}