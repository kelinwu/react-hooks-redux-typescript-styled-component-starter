import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components";
import theme from './styled/themes/Themes'
import thunk from 'redux-thunk'
import App from './components/App'
import { reducers } from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store} >
            <App />
        </Provider>
    </ThemeProvider>,
    document.querySelector('#root')
)