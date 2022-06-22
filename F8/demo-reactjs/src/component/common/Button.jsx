import React, { Component } from 'react';
class Button extends Component {
    render() {
        return (
            <>
                <button className="btn btn-primary m-1" onClick={this.props.handleClick}>{this.props.title}</button>
            </>
        );
    }
}
export default Button;