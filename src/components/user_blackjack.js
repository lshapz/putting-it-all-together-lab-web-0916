import React, { Component } from 'react'

export default function userBlackjack(props) {

  render(){

    var cardTotal = props.state.userCards.map( card => {
      return card.value
    }).reduce( (a,b) => { return a + b}, 0)

    var cards = props.state.userCards.map( card => {
      return <li>{card.name}</li>
    })

    return(
      <div>
        <form onSubmit={props.handleUserHit}>
          <button type="submit">Hit me</button>
        </form>
        <form onSubmit={props.handleStay>
          <button type="submit">Stayt</button>
        </form>
        <h1>Player 1</h1>
        <h2>{cardTotal}</h2>
        <ul>
          {cards}
        </ul>
      </div>
    )
  }
}
