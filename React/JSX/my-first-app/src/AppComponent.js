import React from "react";
import { useState } from "react";
// import { Welcome } from "./ConditionalRendering/5ConditionalRendering";
import { InteractiveWelcome } from "./Forms/1Forms";
// import { Counter } from "./ComponentLifecycle/1ComponentLifecycle";
// import { ClickCounter } from "./Events/3Events";
import { ClickTracker } from "./Events/3Events";
// import { Login} from "./Forms/4Forms";
// import { UncontrolledLogin } from "./Forms/6Forms";
import { Colors } from "./LIsts/2Lists";
import { TodoList } from "./RenderProps/2RenderProps";
import { Container } from "./ComponentComposition/2ComponentComposition";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./Context/2Context";

import { Welcome } from "./FunctionComponent/1FunctionComponent";
import { Sum } from "./FunctionComponent/3FunctionComponents";
import { ClickCounter } from "./useEffects/1useEffects";
// import { Login } from "./CustomHooks/2CustomHooks";
// import { Counter } from "./CustomHooks/1CustomHooks";
import { GitHubUser } from "./CustomHooks/3_4CustomHooks";
import { GithubUserList } from "./useEffects/4useEffects";
import { Login } from "./useRef/1useRef";
import { UncontrolledLogin } from "./useRef/2useRef";
import { Counter } from "./useCallback";
import { FilteredList } from "./useMemo";

// import { Hello } from "./4Component";

const items = [
    {id: 1, name: 'Red', bought: true},
    {id: 2, name: 'Green', bought: false},
    {id: 3, name: 'Blue', bought: true},
]

const list = [
    {id: 1, name: 'Jimmy', age: 18},
    {id: 2, name: 'Helen', age: 15},
    {id: 3, name: 'Jordan', age: 27},
]

export function App () {
    
    const [language, setLanguage] = useState('en')
    
    function handleChangeLanguage(e) {
        setLanguage(e.target.value)
    }
    
    return (
        <div>
                <select value={language} onChange={handleChangeLanguage}>
                    <option value="en">ENGLISH</option>
                    <option value="it">ITALIANO</option>
                </select>    
                
                <Container title="My Awesome APP">
                    
                    <LanguageContext.Provider value={language}>
                    <div className="welcome">
                        <Welcome name="John" age="64"/>
                    </div>
                    </LanguageContext.Provider>
                    
                    
                    <ClickCounter initValue={13}>

                    </ClickCounter>
                    <Counter />

                    <GitHubUser username='IacoM'/>
                    <GithubUserList />
                    
                    <InteractiveWelcome />
                    
                    {/* <Login /> */}
                    
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

                    <FilteredList list={list}/>
                </Container>
        </div>
     )
}