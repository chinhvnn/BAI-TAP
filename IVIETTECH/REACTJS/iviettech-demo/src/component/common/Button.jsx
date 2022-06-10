import React, { Component } from 'react';
class Button extends Component {
      render() {
        return (
            <button className={'btn-default '+this.props.classProps} 
                    onClick={this.props.handleClick}
                    onBlur={this.props.handelBlur}
                    >
                    {this.props.title}
            </button>
        );
    }
}


export default Button;