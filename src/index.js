import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Main from './Components/Main';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './Redux/Reducer'
import {Provider} from 'react-redux'
import App from './Components/App'

const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

//ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
