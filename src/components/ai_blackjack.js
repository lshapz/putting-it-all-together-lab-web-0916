import React, { Component } from 'react'

export default function AIBlackjack(props) {

  debugger

    var cardTotal = props.store.map( card => {
      return card.value
    }).reduce( (a,b) => { return a + b}, 0)


    var cards = props.store.map( card => {
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
