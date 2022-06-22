import React, { Component } from 'react';
import Input from './common/Input';
import Button from './common/Button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            className: '',
            birthDay: '',
            dataList: []

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
        console.log(this.state);
    }
    handleClickAdd() {
        let arr = this.state.dataList;
        let keyValue = (arr.length===0)?1:arr[arr.length-1].key + 1;
        arr.push({
            key: keyValue,
            name: this.state.name,
            className: this.state.className,
            birthDay: this.state.birthDay
        });
        this.setState(
            {
                dataList: arr
            }
        )
    }
    handleClickDelete(key){
        let arr = this.state.dataList;
        arr.splice(arr.findIndex(val => val.key === key), 1);
        this.setState(
            {
                dataList: arr
            }
        )
    }

    handleClear(){
        this.setState(
            {
                name: '',
                className: '',
                birthDay: ''
            }
        )
    }

    render() {
        return (
            <div>
                <div className="col-md-8 p-4">
                    <h3 className="m-3 text-center">STUDENT MANAGER</h3>
                    <div className="form-group row">
                        <label htmlFor="fullName" className="col-sm-3 col-form-label">Full Name</label>
                        <div className="col-sm-8">
                            <Input placeholder='Full Name' value={this.state.name} handleChange={this.handleChange} name='name' />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="className" className="col-sm-3 col-form-label">Class Name</label>
                        <div className="col-sm-8">
                            <Input placeholder='Class Name' value={this.state.className} handleChange={this.handleChange} name='className' />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="birthDay" className="col-sm-3 col-form-label">Birthday</label>
                        <div className="col-sm-8">
                            <Input placeholder='Birth Day' value={this.state.birthDay} handleChange={this.handleChange} name='birthDay' />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button title='ADD' handleClick={this.handleClickAdd} />
                        <Button title='CLEAR' handleClick={this.handleClear}/>
                    </div>
                </div>
                <div className="col-md-8 p-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Class Name</th>
                                <th scope="col">Birth Day</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dataList.map(a=>{
                                    return (
                                        <tr key={a.key}>
                                            <th scope="row">{a.key}</th>
                                            <td>{a.name}</td>
                                            <td>{a.className}</td>
                                            <td>{a.birthDay}</td>
                                            <td><Button title='Delete' handleClick={() => this.handleClickDelete(a.key)}/></td>
                                        </tr>
                                    )
                                })                            
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Form;