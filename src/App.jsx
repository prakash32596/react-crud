import { useState } from 'react'

//custom components
import { CustomForm } from './components/CustomForm'
import { EditForm } from './components/EditForm'
import { TaskList } from './components/TaskList'
import useLocalStorage from './hooks/useLocalstorage'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo-list',[])
  const [editedTask, setEditedTask] = useState(null)
  const [previousFoucsEl, setPreviousFoucsEl] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task])
  }
  const deleteTask = (id) => {
    setTasks((prevSate) => prevSate.filter((t) => t.id != id))
  }
  const updateTask = (id) => {
    setTasks((prevSate) =>
      prevSate.map((t) => (t.id == id ? { ...t, checked: !t.checked } : t))
    )
  }
  const editTask = (task) => {
    setTasks((prevSate) =>
      prevSate.map((t) => (t.id == task.id ? { ...t, name: task.name } : t))
    )
    closeEditMode()
  }
  //close the edit mode
  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFoucsEl(document.activeElement)
  }
  const closeEditMode = () => {
    setIsEditing(false)
    previousFoucsEl.focus()
  }

  return (
    <div className='Conttainer'>
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={editTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default App
