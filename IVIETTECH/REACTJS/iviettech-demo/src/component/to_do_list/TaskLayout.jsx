import React, { Component } from 'react'
import Pagination from '../pagination/Pagination'
import Divider from '../common/Divider'
import TaskHeader from '../common/Title'
import TaskList from './TaskList'
import '../../sass/TaskLayout.scss'

export class TaskLayout extends Component {
  render() {
    return (
      <div className='task-layout'>
        <TaskHeader/>
        <TaskList/>
        <Pagination />
      </div>
    )
  }
}

export default TaskLayout