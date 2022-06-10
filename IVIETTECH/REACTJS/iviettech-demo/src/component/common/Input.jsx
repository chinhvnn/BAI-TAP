import React, { Component } from 'react'

export default class Input extends Component {

  render() {
    return (
      <input placeholder={this.props.placeholder} 
      className='input-default'
      value={this.props.value}
      name={this.props.name}
      type={this.props.type}
      onChange={this.props.handleOnChange}
      onBlur={this.props.handleOnBlur}
      ref={this.props.handleRef}
      ></input>
    )
  }
}
