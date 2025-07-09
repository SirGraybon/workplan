import '@/app/styles/taskListItem.css';

export default function taskListItem(task, selectedTask, index) {
  return(


    <div className={selectedTask && selectedTask.ID === task.ID ? "taskListItem_wrapper_selected" : "taskListItem_wrapper"  }>
    <div className='taskListItem' >
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
      <section>

       <ul className='taskListItem_Notes'>
        {task.notes.map((note, index) => {
          return <li key={index}>{note}</li>
        })
      }
      </ul>
      <button onClick={()=> selectedTask.status = "Complete"}> done!</button>
      </section>
      }

      
    </div>
    </div>
  )
}