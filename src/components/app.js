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
    var userScore = this.props.store.getState().userCards.map( card => {
      return card.value
    }) 
    //.reduce( (a,b) => { return a + b}, 0)
    userScore = this.scoreReducer(userScore)

    if(userScore > 21){
      return 'BUST'
    } else {
      return userScore
    }
  }

  calculateAiScore(){
    var aiScore = this.props.store.getState().aiCards.map( card => {
      return card.value
    })
    
    aiScore = this.scoreReducer(aiScore)
    if (aiScore > 21){
      return 'BUST'
    } else {
      return aiScore
    }
  }
  scoreReducer(input){
    if( input.includes(1) )
      { var subinput = input.splice(input.indexOf(1), 1)
        var subtotal = subinput.reduce((a, b)=>{return parseInt(a) + parseInt(b)}, 0)
        
        if (subtotal < 10)
          { return parseInt(subtotal) + 11 }
        else {return parseInt(subtotal) + 1 }
    }
  else {
    return input.reduce((a, b)=>{return parseInt(a) + parseInt(b)}, 0)
  }

  }


  hitMe(event){
    // debugger
    if (event){
      event.preventDefault()
      if (this.calculateUserScore() === ('BUST' || 21)){
        var btn = document.getElementById("hit")
        btn.disabled = true
      }
      else {this.props.store.dispatch(hitUser(this.props.store.getState())) }
    }
    else {
      this.props.store.dispatch(hitAi(this.props.store.getState()))
    }
  }
  stay(event){
    event.preventDefault()
    while ((this.calculateAiScore() < this.calculateUserScore()) && (this.calculateAiScore() <= 21)){
      this.hitMe()
    }


  }

  render(){
    return(
      <div>
        <UserBlackjack store={this.props.store} userCards={this.props.store.getState().userCards} score={this.calculateUserScore} hitMe={this.hitMe} stay={this.stay} />
        <AIBlackjack store={this.props.store} aiCards={this.props.store.getState().aiCards} score={this.calculateAiScore} />
      </div>
    )
  }
}
