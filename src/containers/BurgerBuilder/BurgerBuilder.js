import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'lol'
    }
  }

  render () {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Control</div>
      </Aux>
    )
  }
}

export default BurgerBuilder
