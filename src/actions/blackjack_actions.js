import { store } from '../index.js'

export function fetchDeck() {
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(state) {
  var deck = state.deck
  var rand1 = Math.floor(Math.random() * deck.length )
  var card1 = deck[rand1]
  var rand2 = Math.floor(Math.random() * deck.length )
  while (rand2 === rand1) {
    rand2 = Math.floor(Math.random() * deck.length )
  }
  var card2 = deck[rand2]
  var new_deck = Array.from(state.deck)
  new_deck.splice(new_deck.indexOf(card1), 1)
  new_deck.splice(new_deck.indexOf(card2), 1)
  return {
    type: 'SET_AI_CARDS',
    payload: {deck: new_deck, aiCards: [card1, card2]}
  }
  debugger
}
export function setUserCards(state) {
  var deck = state.deck
  var rand1 = Math.floor(Math.random() * deck.length )
  var card1 = deck[rand1]
  var rand2 = Math.floor(Math.random() * deck.length )
  while (rand2 === rand1) {
    rand2 = Math.floor(Math.random() * deck.length )
  }
  var card2 = deck[rand2]
  var new_deck = Array.from(state.deck)
  new_deck.splice(new_deck.indexOf(card1), 1)
  new_deck.splice(new_deck.indexOf(card2), 1)
  return {
    type: 'SET_USER_CARDS',
    payload: {deck: new_deck, userCards: [card1, card2]}
  }
}
export function hitAi(state) {
  var deck = state.deck
  var rand = Math.floor(Math.random() * deck.length )
  var card = deck[rand]
  return {
    type: 'HIT_AI',
    payload: card
  }
}
export function hitUser(state) {
  var deck = state.deck
  var rand = Math.floor(Math.random() * deck.length )
  var card = deck[rand]
  return {
    type: 'HIT_USER',
    payload: card
  }
}
