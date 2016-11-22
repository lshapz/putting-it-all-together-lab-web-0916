import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.hitMe = this.hitMe.bind(this)
  }

  hitMe(){
    // props.store.dispatch("HIT_AI")
  }
  //
  // hitUser(){
  //   props.store.dispatch("HIT_AI")
  // }

  render(){
    debugger
    return(
      <div>
        <userBlackjack store={this.props.store} />
        // <aiBlackjack store={this.props.store} />
      </div>
    )
  }
}
