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
    this.scoreReducer = this.scoreReducer.bind(this)
  }

  calculateUserScore(){
    var userScore = this.props.store.getState().userCards.map( card => {
      return card.value
    }) //.reduce( (a,b) => { return a + b}, 0)
    var displayScore = userScore.reduce( function(a,b) { return parseInt(a) + parseInt(b) }, 0)
    if (userScore.indexOf(1) == true && displayScore <= 11 )
          { displayScore += 10    }
    if (displayScore > 21){
      return 'BUST'
    } else {
      return displayScore
    }
  }

  calculateAiScore(){
    var aiScore = this.props.store.getState().aiCards.map( card => {
      return card.value
    }) //.reduce( (a,b) => { return a + b}, 0)
    var displayScore = aiScore.reduce( function(a,b) { return parseInt(a) + parseInt(b) }, 0)
    if (aiScore.indexOf(1) == true && displayScore <= 11 )
          { displayScore += 10    }
    if (displayScore > 21){
      return 'BUST'
    } else {
      return displayScore
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
