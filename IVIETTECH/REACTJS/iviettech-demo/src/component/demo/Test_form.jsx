import React, { Component } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'

export default class Test_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.inputRef = React.createRef();
  }
  // GET VALUE INPUT
  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <div>
          <Input type='test' placeholder='Tên đăng nhập' name='user' handleOnChange={this.handleOnChange} value=''/>
          <Input type='password' placeholder='Mật khẩu' name='pass' handleOnChange={this.handleOnChange} value=''/>
          <Button title="ĐĂNG NHẬP"/>
      </div>
    )
  }
}
