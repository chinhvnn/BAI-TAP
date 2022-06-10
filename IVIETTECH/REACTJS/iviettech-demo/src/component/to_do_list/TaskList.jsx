import React, { Component } from "react";
import TaskPostItem from "./TaskPostItem";
import Button from "../common/Button";
import Input from "../common/Input";
import Divider from "../common/Divider";
import Pagination from "../pagination/Pagination";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentInput: "",
      keyUpdate: -1,
      pagination: {
        currentPage: 1,
        itemPerPage: 2,
      },
      dataList: [],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
    this.handleCompletedUpdate = this.handleCompletedUpdate.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    // this.handleOnBlur = this.handleOnBlur.bind(this);
    this.inputRef = React.createRef();
  }
  // GET VALUE INPUT
  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state);
  }
  //   CLICK ADD
  handleClickAdd() {
    const arr = [...this.state.dataList];

    if (this.state.contentInput === "") {
      alert("YÊU CẦU KHÔNG ĐƯỢC NHẬP GIÁ TRỊ RỖNG");
      this.inputRef.current.focus();
    } else {
      let keyValue = arr.length === 0 ? 0 : arr[arr.length - 1].key + 1;
      let contentValue = this.state.contentInput;
      arr.push({
        key: keyValue,
        content: contentValue,
        isCompleted: true,
      });
      arr.length > 1 && (arr[arr.length - 2].isCompleted = false);
      this.setState({
        contentInput: "",
        dataList: arr,
      });
      // console.log(this.state);
    }
  }
  // UPDATE
  handleClickUpdate(key) {
    let contentValue = this.state.dataList[key].content;
    this.setState({
      keyUpdate: key,
      contentInput: contentValue,
    });
    this.inputRef.current.focus();
  }
  handleCompletedUpdate() {
    const arr = [...this.state.dataList];
    let key = this.state.keyUpdate;
    arr[key].content = this.state.contentInput;
    this.setState({
      contentInput: "",
      keyUpdate: -1,
      dataList: arr,
    });
  }
  // handleOnBlur(){
  //     let arr = this.state.dataList;
  //     let key = this.state.keyUpdate;
  //     arr[key].content = this.state.contentInput
  //     this.setState(
  //         {
  //             contentInput : '',
  //             keyUpdate : -1,
  //             dataList: arr
  //         }
  //     )
  //     console.log(this.state);
  // }

  // DELETE
  handleClickDelete(key) {
    console.log("delete");
    const arr = [...this.state.dataList];
    arr.splice(arr.findIndex((val) => val.key === key), 1);
    this.setState({
      dataList: arr,
    });
  }

  // PAGNINATION
  handlePagination(e) {
    const pag = this.state.pagination;
    let totalPage = Math.ceil(this.state.dataList.length / pag.itemPerPage);
    let pagKey = e.target.name;
    switch (pagKey) {
      case "choose":
        pag.currentPage = e.target.id;
        break;
      case "next":
        if (pag.currentPage < totalPage) pag.currentPage++;
        break;
      case "previous":
        if (pag.currentPage > 1) pag.currentPage--;
        break;

      default:
        break;
    }
    this.setState({
      pagination: pag
    });
  }

  render() {
    const {currentPage, itemPerPage} = this.state.pagination;
    const allPostCount = this.state.dataList.length;
    let totalPage = Math.ceil(allPostCount / itemPerPage);
    let startIndex = currentPage * itemPerPage - (itemPerPage - 1);
    let endIndex = allPostCount - currentPage * itemPerPage !== 0
        ? itemPerPage * currentPage
        : allPostCount;
    let listItemPerPage = this.state.dataList
      .reverse()
      .slice(startIndex - 1, endIndex);
    return (
      <div>
        {/* --- INPUT NHẬP --- */}
        <Input
          name="contentInput"
          placeholder="Add task name here"
          handleOnChange={this.handleOnChange}
          // handleOnBlur={(this.state.keyUpdate >= 0)?this.handleOnBlur:''}
          value={this.state.contentInput}
          handleRef={this.inputRef}
        />

        {/* --- NÚT THÊM --- */}
        {this.state.keyUpdate >= 0 ? (
          <Button title={"Apply"} handleClick={this.handleCompletedUpdate} />
        ) : (
          <Button
            title={<i className="fa-solid fa-plus"></i>}
            classProps="btn-circle"
            handleClick={this.handleClickAdd}
          />
        )}

        {this.state.dataList.length > 0 ? <Divider /> : ""}

        {/* --- LIST TODO POST ITEM --- */}
        <TaskPostItem 
            dataList={this.state.dataList}
            clickDelete={this.handleClickDelete}
            clickUpdate={this.handleClickUpdate}
            listItemPerPage={listItemPerPage}
            />

        {/* PHÂN TRANG PAGINATION */}
        <Pagination
          totalPage={totalPage}
          handlePagination={this.handlePagination}
          currentPage = {currentPage}
        />
      </div>
    );
  }
}

export default TaskList;
