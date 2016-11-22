import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import { fetchDeck, setAICards, setUserCards, hit } from '../src/actions/blackjack_actions'

import {createStore} from './store'

import blackjackReducer from './reducers/blackjack_reducer'

export const store = createStore(blackjackReducer)

store.subscribe(render)
store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))
ReactDOM.render(<App store={store}/>, document.getElementById('container'))

require('../test/index-test.js')  // Leave this in!
