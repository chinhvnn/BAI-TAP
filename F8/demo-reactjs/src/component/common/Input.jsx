import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <>
                <input type="text" className="form-control" 
                placeholder={this.props.placeholder} 
                value={this.props.value}
                onChange = {this.props.handleChange}
                name = {this.props.name}
                />
            </>
        );
    }
}


export default Input;