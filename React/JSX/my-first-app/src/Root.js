import { BrowserRouter } from 'react-router-dom';
import { App } from './AppComponent'

export function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}
