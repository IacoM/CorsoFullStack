import React from "react";
import { Welcome } from "./Props/5Props";
// import { Hello } from "./4Component";

export class App extends React.Component {
    render(){
        return (
            <div>
                <Welcome name="Geronimo" />
            </div>
        )
    }
}