import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'


export const CustomForm = ({addTask}) => {
    const [task, setTask] = useState('')
    const handleFormSubmit= (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked:false,
            id: Date.now()
        });
        // console.log(e);
        setTask('')
    }
  return (
    <form className='todo' onSubmit={handleFormSubmit}>
        <div className="wrapper">
            <label htmlFor="task"></label>
            <input 
                type='text' 
                id='task'
                className='input' 
                value={task} 
                onInput={(e)=> setTask(e.target.value)}
                required 
                placeholder='Enter Task' 
                maxLength={60}  />
        </div>
            <button className="btn" aria-label='Add task' type='submit' >
            <PlusIcon className="h-6 w-6 text-blue-500"/>

            </button>
    </form>
  )
}
