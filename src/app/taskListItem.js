import '@/app/styles/taskListItem.css';

export default function taskListItem(task, selectedTask, index, updateTaskListData, taskListData) {
const setComplete = (id) => {
  updateTaskListData(prevData =>
    prevData.map(task =>
      task.ID === id ? { ...task, status: "Complete" } : task
    )
  )};

  return(

    <div className={selectedTask && selectedTask.ID === task.ID ? "taskListItem_wrapper_selected" : "taskListItem_wrapper"} 
      style={task.status === "Complete" ? {backgroundColor: "#c2e48f"} : {}}
     >
    <div className='taskListItem'   >
      <section className="taskListItem_Header">
        <div className='taskListTitleCard'>
          <h1 className='taskListTitle'>{task.title}</h1>
          <p>{task.description}</p>
        </div>
        <div className='taskListInfo'>
          <div className='taskListItem_User'>{task.lead}</div>
          <p>{task.status}</p>
        <p>{task.dueDate}</p>
        </div>
      </section>
       {selectedTask && selectedTask.ID === task.ID && 
      <section className='taskListAdditionalContent'>

       <ul className='taskListItem_Notes'>
        {task.notes.map((note, index) => {
          return <li key={index}>{note}</li>
        })
      }
      </ul>
      <button className='doneButton' onClick={()=> setComplete(task.ID)}> done!</button>
      </section>
      }

      
    </div>
    </div>
  )
}