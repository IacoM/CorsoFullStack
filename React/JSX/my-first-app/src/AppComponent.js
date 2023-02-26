import React from "react";
import { Welcome } from "./ConditionalRendering/5ConditionalRendering";
import { InteractiveWelcome } from "./Forms/1Forms";
import { Counter } from "./ComponentLifecycle/1ComponentLifecycle";
import { ClickCounter } from "./Events/3Events";
import { ClickTracker } from "./Events/3Events";
import { Login} from "./Forms/4Forms";
import { UncontrolledLogin } from "./Forms/6Forms";
import { Colors } from "./LIsts/2Lists";
import { TodoList } from "./LIsts/4Lists";
import { Container } from "./ComponentComposition/2ComponentComposition";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./Context/2Context";
// import { Hello } from "./4Component";

const items = [
    {id: 1, name: 'Red', bought: true},
    {id: 2, name: 'Green', bought: false},
    {id: 3, name: 'Blue', bought: true},
]

export class App extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguageChange= (e) => {
        this.setState({
            language: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="en">ENGLISH</option>
                    <option value="it">ITALIANO</option>
                </select>
               <LanguageContext.Provider value={this.state.language}> 
                    <DisplayLanguage />
                </LanguageContext.Provider>
                    
                    <Container title="My Awesome APP">
                        <div className="welcome">
                            <Welcome name="John" age="64"/>
                        </div>
                        <ClickCounter />
                        <InteractiveWelcome />
                        <Login />
                        <UncontrolledLogin />
                        <Colors colors={items}/>
                        <TodoList />
                    </Container>
            </div>
        )
    }
}