import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux'

import configureStore from './store/configureStore'
import { startGetUsers } from './actions/users';

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

console.log(store)
console.log(store.getState())

store.dispatch(startGetUsers())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));