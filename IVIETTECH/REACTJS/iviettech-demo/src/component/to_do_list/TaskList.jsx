import React, { Component } from 'react';
import TaskPostItem from './TaskPostItem';
import Button from '../common/Button';
import Input from '../common/Input';
import Divider from '../common/Divider';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            dataList : []
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }
    handleClickAdd() {
        let arr = this.state.dataList;
        let contentValue = (this.state.nameInput ==='')?'Chuỗi này trống':this.state.nameInput;
        let keyValue = (arr.length===0)?1:arr[arr.length-1].key + 1;
        arr.push({
            key: keyValue,
            content: contentValue
        });
        this.setState(
            {
                dataList: arr
            }
        )
        console.log(this.state);
    }
    handleClickDelete(key){
        console.log('12312');
        let arr = this.state.dataList;
        arr.splice(arr.findIndex(val => val.key === key), 1);
        this.setState(
            {
                dataList: arr
            }
        )
    }
    render() {
        return (
            <div>
                <Input  name='nameInput'
                        placeholder='Add task name here' 
                        handleOnChane={this.handleOnChange} 
                        />
                <Button title={<i className="fa-solid fa-plus"></i>}
                        classProps = 'btn-circle'
                        handleClick={this.handleClickAdd}/>
                {(this.state.dataList.length > 0)?<Divider />:''}
                {this.state.dataList.map(val => <TaskPostItem content={val.content} 
                                                              key={val.key} 
                                                              clickDelete={()=>this.handleClickDelete(val.key)}
                                                              clickUpdate={()=>this.handleClickUpdate(val.key)}/>)}
            </div>
        );
    }
}

export default TaskList;