import React, { Component } from 'react'

export default function UserBlackjack(props) {

    var cards = props.userCards.map( card => {
      return <li>{card.name}</li>
    })
  return(

      <div>
            <form onSubmit={props.hitMe}>
              <button type="submit"> Hit Me </button>
            </form>
          <form onSubmit={props.stay}>
            <button type="submit"> Stay </button>
          </form>
        <h1>Player1</h1>
        <h2>Score: {props.score()}</h2>
        <ul>
          {cards}
        </ul>
      </div>
    )

}
