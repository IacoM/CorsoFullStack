import ReactDOM from 'react-dom'
import { Hello } from './1Components'

const helloElement = <Hello />
const root = document.querySelector('#root')

ReactDOM.render(helloElement, root)