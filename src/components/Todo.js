import React, { useState } from 'react'

const Todo = () => {

    const [task, updateTask] = useState('')
    const [tasks, updateTasks] = useState([]) //new stage

    const hendleInputChance = event => updateTask(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()
        if(task.trim()){
            updateTasks([... tasks, task]) // takes everything from tasks and adds it to a new task array
            updateTask('') //clear input
        }
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    data-testid="form-field" 
                    onChange={hendleInputChance} 
                    value={task}
                />

                <button data-testid="form-btn" type="submit">Add new task</button>

            </form>
            <table data-testid="table">
                <thead>
                    <tr>
                        <th>Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map( (t, index) => (
                         
                        <tr ke={index}>
                            <td>{t}</td>
                        </tr>

                    ))}
                    
                </tbody>
            </table>            
        </>
    )
}

export default Todo