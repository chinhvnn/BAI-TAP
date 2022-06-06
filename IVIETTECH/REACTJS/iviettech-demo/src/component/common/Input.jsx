import React, { Component } from 'react'

export default class Input extends Component {

  render() {
    return (
      <input placeholder={this.props.placeholder} 
      className='input-default'
      value={this.props.value}
      name={this.props.name}
      onChange={this.props.handleOnChane}
      ></input>
    )
  }
}
