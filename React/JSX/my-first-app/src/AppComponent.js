import React from "react";
// import { Welcome } from "./ConditionalRendering/5ConditionalRendering";
import { InteractiveWelcome } from "./Forms/1Forms";
// import { Counter } from "./ComponentLifecycle/1ComponentLifecycle";
// import { ClickCounter } from "./Events/3Events";
import { ClickTracker } from "./Events/3Events";
// import { Login} from "./Forms/4Forms";
import { UncontrolledLogin } from "./Forms/6Forms";
import { Colors } from "./LIsts/2Lists";
import { TodoList } from "./RenderProps/2RenderProps";
import { Container } from "./ComponentComposition/2ComponentComposition";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./Context/2Context";

import { Welcome } from "./FunctionComponent/1FunctionComponent";
import { Sum } from "./FunctionComponent/3FunctionComponents";
import { ClickCounter } from "./useEffects/1useEffects";
import { Login } from "./useState/2useState";
import { Counter } from "./useEffects/2useEffects";
// import { Hello } from "./4Component";

const items = [
    {id: 1, name: 'Red', bought: true},
    {id: 2, name: 'Green', bought: false},
    {id: 3, name: 'Blue', bought: true},
]

export function App () {
    
    
    return (
        <div>
                    
                <Container title="My Awesome APP">
                    <div className="welcome">
                        <Welcome name="John" age="64"/>
                    </div>
                    
                    
                    <ClickCounter initValue={13}>

                    </ClickCounter>
                    <Counter />
                    <InteractiveWelcome />
                    <Login />
                    <UncontrolledLogin />
                    <Colors colors={items}/>
                    <TodoList
                    > 
                    {(items) => {
                            
                            return (
                                <div>
                                <ul>{
                                    items.map((el) => 
                                        <li >
                                            {el} <button onClick={() => this.setState({items: items.filter(x => x !== el)})}>REMOVE</button>
                                        </li>
                                )}
                                </ul>
                            </div>
                            )
                        }}
                    
                    </TodoList>

                    
                    <Sum numbers={[2, 7, 13, 5]} />
                </Container>
        </div>
     )
}