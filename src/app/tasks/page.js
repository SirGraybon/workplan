"use client"
//IMPORTs
import data from '@/data/data.json'
import taskListItem from '../taskListItem'
import '@/app/styles/taskListItem.css';
import { useEffect, useState } from 'react';

//Function Export
export default function Tasks() {

// State Management
const [taskListData, updateTaskListData] = useState(data)
const [selectedTask, setSelectedTask] = useState()

selectedTask && console.log(selectedTask.ID)
  const taskList = taskListData.map((task, index) =>
    <div key={index} onClick={ () =>setSelectedTask(task)}>
      {taskListItem(task, selectedTask, index)}
      </div>
)

  return(
  <>
  <section className='taskList'>{taskList}</section>
  </>
)
}
