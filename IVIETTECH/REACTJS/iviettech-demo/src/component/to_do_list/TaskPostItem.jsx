import React, { Component } from "react";
import Button from "../common/Button";
import Divider from "../common/Divider";

class TaskPostItem extends Component {
  render() {
    return (
      <div>
        <div className="task-post-item">
            <p>{this.props.content}</p>
          <div>
            <Button classProps='btn-none' 
                    title={<i className="fa-solid fa-circle-check"></i>} 
                    handleClick={this.props.clickUpdate} />
            <Button classProps='btn-none' 
                    title={<i className="fa-solid fa-trash"></i>} 
                    handleClick={this.props.clickDelete}/>
          </div>
        </div>
        <Divider width="100%" />
      </div>
    );
  }
}

export default TaskPostItem;
