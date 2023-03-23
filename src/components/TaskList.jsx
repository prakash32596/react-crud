import React from 'react'
import { TaskItem } from './TaskItem'

//styles
import styles from './TaskList.module.css'

export const TaskList = ({tasks,deleteTask,updateTask,enterEditMode}) => {
  return (
    <ul className={styles.tasks}>
        { tasks.sort((a,b)=> b.id-a.id).map(task => (
            <TaskItem 
               key={task.id}
               task={task}
               deleteTask={deleteTask}
               updateTask={updateTask}
               enterEditMode={enterEditMode}
            />
        ))

        }

    </ul>
  )
}
