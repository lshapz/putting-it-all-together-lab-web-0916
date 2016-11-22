import React, { Component } from 'react'

export default function AiBlackjack(props) {
  
    var cardTotal = props.store.getState().aiCards.map( card => {
      return card.value
    }).reduce( (a,b) => { return a + b}, 0)


    var cards = props.store.getState().aiCards.map( card => {
      return <li>{card.name}</li>
    })  
  return(
    
      <div>
        <h1>Computer</h1>
        <h2>{cardTotal}</h2>
        <ul>
          {cards}
        </ul>
      </div>
    )
  
}
