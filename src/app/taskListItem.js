import '@/app/styles/taskListItem.css';

export default function taskListItem(task, selectedTask, index) {
  return(


    <div className={selectedTask === index ? "taskListItem_wrapper_selected" : "taskListItem_wrapper"  }>
    <div className='taskListItem' >
      <section className="taskListHeader">
        <div className='taskListTitleCard'>
          <h1 className='taskListTitle'>{task.title}</h1>
          <p>{task.description}</p>
        </div>
        <div className='taskListInfo'>
          <p>{task.lead}</p>
          <p>{task.status}</p>
          <p>{task.dueDate}</p>
        </div>
      </section>
      <secton>
        {/* {task.notes} */}
      </secton>

      
    </div>
    </div>
  )
}