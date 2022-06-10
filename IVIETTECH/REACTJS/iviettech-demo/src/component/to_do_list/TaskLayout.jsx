import React, { Component } from 'react'
import TaskHeader from '../common/Title'
import TaskList from './TaskList'
import '../../sass/TaskLayout.scss'

export class TaskLayout extends Component {
  render() {
    return (
      <div className='task-layout'>
        <TaskHeader/>
        <TaskList/>
      </div>
    )
  }
}

export default TaskLayout