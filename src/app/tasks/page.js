"use client";
import data from '@/data/data.json';
import taskListItem from '../taskListItem';
import '@/app/styles/taskListItem.css';
import { useState } from 'react';

export default function Tasks() {
  const [taskListData, updateTaskListData] = useState(
    [...data].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
  );
  const [selectedTask, setSelectedTask] = useState(null);

  let lastMonth = ""; // Track last seen month for headings

  const taskList = taskListData.map((task, index) => {
    const taskDate = new Date(task.dueDate);
    const currentMonth = taskDate.toLocaleString('default', { month: 'long' });

    const showHeading = currentMonth !== lastMonth;
    lastMonth = currentMonth;

    return (
      <div key={index}>
        {showHeading && <h2 className="dateHeader">{currentMonth}</h2>}

        <div onClick={() => setSelectedTask(task)}>
          {taskListItem(task, selectedTask, index, updateTaskListData, taskListData)}
        </div>
      </div>
    );
  });

  return (
    <section className="taskList">
      {taskList}
    </section>
  );
}