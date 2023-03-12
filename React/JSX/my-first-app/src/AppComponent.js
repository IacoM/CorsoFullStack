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
import { ClickCounter } from "./useState/1useState";
// import { Login } from "./CustomHooks/2CustomHooks";
// import { Counter } from "./CustomHooks/1CustomHooks";
import { GitHubUser } from "./CustomHooks/3_4CustomHooks";
import { GithubUserList } from "./useEffects/4_2useEffects";
import { Login } from "./useRef/1useRef";
import { UncontrolledLogin } from "./useRef/2useRef";
import { Counter } from "./useCallback";
import { FilteredList } from "./useMemo";
import { ShowGithubUser } from "./useEffects/3_2useEffects";

import { Routes, Route, Link } from "react-router-dom";

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

                    <Routes>

                        <Route path="/" element={
                            <LanguageContext.Provider value={language}>
                            <div className="welcome">
                                <Welcome />
                            </div>
                            </LanguageContext.Provider>
                            }
                        />

                        <Route path="/counter" element={
                            <div className="welcome">
                            <ClickCounter initValue={13} />
                            </div>
                            }
                        />

                        <Route path="/users" element={<div className="welcome"><GithubUserList /></div>}>
                            <Route index element={<p>Add a user and select it</p>} />
                            <Route path=":username" element={<ShowGithubUser />} />
                        </Route>

                        <Route path="*" element={<p>Not Found</p>} />

                    </Routes>
                    <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">GitHub Users</Link>


                    <Counter />

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
