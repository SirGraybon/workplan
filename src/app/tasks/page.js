import data from '@/data/data.json'
import taskListItem from '../taskListItem'
console.log(data[0].title)

export default function tasks() {
  const taskList = data.map((task) =>

    <li>{taskListItem(task)}</li>

)
    
  
  return(
  <>
  {/* <ul>{taskListItem(data[0])}</ul> */}
  <ul>{taskList}</ul>
  </>
)
}