import React, { Component } from "react";
import Button from "../common/Button";
import Divider from "../common/Divider";

class TaskPostItem extends Component {
  render() {
    let handleClickDelete = this.props.clickDelete;
    let handleClickUpdate = this.props.clickUpdate;
    let listItemPerPage = this.props.listItemPerPage;

    return (
      <div>
        {listItemPerPage.map((val) => (
        <div key={val.key}>
          
          <div className={"task-post-item"} >
            <p className={val.isCompleted ? "" : "green-color"}>{val.key +' - '+ val.content}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
            {val.isCompleted ? <i className="fa-solid fa-check"></i> : ""}  
              <Button
                classProps="btn-none"
                title={<i className="fa-solid fa-pen-to-square"></i>}
                handleClick={() => handleClickUpdate(val.key)}
              />
              <Button
                classProps="btn-none"
                title={<i className="fa-solid fa-trash"></i>}
                handleClick={() => handleClickDelete(val.key)}
              />
            </div>
          </div>
          <Divider width='100%'/>
        </div>
          
        ))}
      </div>
    );
  }
}

export default TaskPostItem;
