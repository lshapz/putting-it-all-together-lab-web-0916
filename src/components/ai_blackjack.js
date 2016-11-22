import React, { Component } from 'react'

export default function AIBlackjack(props) {

    var cardTotal = props.aiCards.map( card => {
      return card.value
    }).reduce( (a,b) => { return a + b}, 0)


    var cards = props.aiCards.map( card => {
      return <li>{card.name}</li>
    })
  return(

      <div>
        <h1>Computer</h1>
        <h2>Score: </h2>
        <h3>{cardTotal}</h3>
        <ul>
          {cards}
        </ul>
      </div>
    )

}
