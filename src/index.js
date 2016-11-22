import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import { fetchDeck, setAICards, setUserCards, hitUser, hitAi } from '../src/actions/blackjack_actions'

import {createStore} from './store'

import blackjackReducer from './reducers/blackjack_reducer'

export const store = createStore(blackjackReducer)

export const render =  function render(){
  if(typeof window !== 'undefined') {

  ReactDOM.render(<App store={store} />, document.getElementById('container'))
} } //???????

store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

render()

store.subscribe(render)

require('../test/index-test.js')  // Leave this in!
