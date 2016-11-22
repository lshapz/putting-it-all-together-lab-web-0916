import React, { Component } from 'react'

export default function UserBlackjack(props) {
  
    var cards = props.store.getState().userCards.map( card => {
      return <li>{card.name}</li>
    })  
  return(
    
      <div>
            <form onSubmit={props.handleUserHit}>
              <button type="submit">Hit me</button>
            </form>
          <form onSubmit={props.handleStay}>
            <button type="submit">Stay</button>
          </form>
        <h1>Player 1</h1>
        <h2>{props.userScore()}</h2>
        <ul>
          {cards}
        </ul>
      </div>
    )
  
}
