"use client"
//IMPORTs
import data from '@/data/data.json'
import taskListItem from '../taskListItem'
import '@/app/styles/taskListItem.css';
import { useState } from 'react';

//Function Export
export default function Tasks() {

// State Management
const [selectedTask, setSelectedTask] = useState()


  const taskList = data.map((task, index) =>
    <div key={index} onClick={ () =>setSelectedTask(index)}>
      {taskListItem(task, selectedTask, index)}
      </div>
)

  return(
  <>
 <button onClick={console.log(selectedTask)}> TEST </button>
  <section className='taskList'>{taskList}</section>
  </>
)
}
