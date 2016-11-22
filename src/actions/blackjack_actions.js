import { store } from '../index.js'

export function fetchDeck() {
  store.dispatch('FETCH_DECK')
}

export function setAICards(store) {
  var deck = getState().deck
  var rand1 = Math.floor(Math.random() * deck.length )
  var card1 = deck[rand1]
  var rand2 = Math.floor(Math.random() * deck.length )
  while (rand2 === rand1) {
    rand2 = Math.floor(Math.random() * deck.length )
  }
  var card2 = deck[rand2]

  return {
    type: 'SET_AI_CARDS',
    payload: [card1, card2]
  }
}
export function setUserCards(store) {
  var deck = getState().deck
  var rand1 = Math.floor(Math.random() * deck.length )
  var card1 = deck[rand1]
  var rand2 = Math.floor(Math.random() * deck.length )
  while (rand2 === rand1) {
    rand2 = Math.floor(Math.random() * deck.length )
  }
  var card2 = deck[rand2]
  return {
    type: 'SET_USER_CARDS',
    payload: [card1, card2]
  }
}
export function hitAI(deck) {
  var deck = getState().deck
  var rand = Math.floor(Math.random() * deck.length )
  var card = deck[rand]
  return {
    type: 'HIT_AI',
    payload: card
  }
}
export function hitUser() {
  var deck = getState().deck
  var rand = Math.floor(Math.random() * deck.length )
  var card = deck[rand]
  return {
    type: 'HIT_USER',
    payload: card
  }
}
