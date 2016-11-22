import React, { Component } from 'react'
import UserBlackjack from './user_blackjack'
import AIBlackjack from './ai_blackjack'
import { fetchDeck, setAICards, setUserCards, hitUser, hitAi } from '../actions/blackjack_actions'

export default class App extends Component {
  constructor(props){
    super(props)
    this.hitMe = this.hitMe.bind(this)
    this.stay = this.stay.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
  }

  calculateUserScore(){
      return this.props.store.getState().userCards.map( card => {
         return card.value
       }).reduce( (a,b) => { return a + b}, 0)
     }

  calculateAiScore(){
    return this.props.store.getState().aiCards.map( card => {
      return card.value
    }).reduce( (a,b) => { return a + b}, 0)
  }

  hitMe(event){
    // debugger
    if (event){
      event.preventDefault()
       this.props.store.dispatch(hitUser(this.props.store.getState()))
    }
    else {
      this.props.store.dispatch(hitAi(this.props.store.getState()))
    }
  }
  stay(event){
    debugger
    event.preventDefault()
    var ai = this.calculateAiScore()
    var user = this.calculateUserScore()
    if ((ai < user) && (ai <= 21)){
      this.hitMe()
    }


  }

  render(){

    return(
      <div>
      HELLO
        <UserBlackjack store={this.props.store.getState().userCards} userScore={this.calculateUserScore} handleUserHit={this.hitMe} handleStay={this.stay} />
        <AIBlackjack store={this.props.store.getState().aiCards} aiScore={this.calculateAiScore} />
      </div>
    )
  }
}
