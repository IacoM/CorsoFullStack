import React from "react";

import { Age } from "../ConditionalRendering/5ConditionalRendering";

export function Welcome({ name='Jimmy', age='82' }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {age < 65 && name === "John" && <Age age={age}/>}
        </div>
    )
}
