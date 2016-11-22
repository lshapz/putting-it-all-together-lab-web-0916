function fetchDeck() {
  store.dispatch('FETCH_DECK')
}

function setAICards(store) {
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
function setUserCards(store) {
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
function hitAI() {
  store.dispatch('HIT_AI')
}
function hitUser() {
  store.dispatch('HIT_USER')
}