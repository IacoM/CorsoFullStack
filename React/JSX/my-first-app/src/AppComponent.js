import React from "react";
import { Welcome } from "./ConditionalRendering/5ConditionalRendering";
import { InteractiveWelcome } from "./Forms/1Forms";
import { Counter } from "./ComponentLifecycle/1ComponentLifecycle";
import { ClickCounter } from "./Events/3Events";
import { ClickTracker } from "./Events/3Events";
import { Login} from "./Forms/4Forms";
import { UncontrolledLogin } from "./Forms/6Forms";
import { Colors } from "./LIsts/2Lists";
import { TodoList } from "./LIsts/3Lists";
// import { Hello } from "./4Component";

const items = [
    {id: 1, name: 'Red', bought: true},
    {id: 2, name: 'Green', bought: false},
    {id: 3, name: 'Blue', bought: true},
]

export class App extends React.Component {
    render() {
        return (
            <div>
                <div className="welcome">
                    <Welcome name="John" age="64" className="welcome"/>
                </div>
                <ClickCounter />
                <InteractiveWelcome />
                <Login />
                <UncontrolledLogin />
                <Colors colors={items}/>
                <TodoList />
            </div>
        )
    }
}