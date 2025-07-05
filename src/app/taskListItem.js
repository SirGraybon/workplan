import '@/app/styles/taskListItem.css';

export default function taskListItem(task) {
  return(
    <div className="taskListItem">
      <section>

      <p>{task.title}</p>
      <p>{task.description}</p>
      </section>
      <p>{task.status}</p>
      <p>{task.dueDate}</p>
      
      
    </div>
  )
}