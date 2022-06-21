import React, { useState } from 'react'
import './Todo.css'

function Todo(props) {

  const [completed, setCompleted] = useState(false)

  const {todo} = props
  return(
    <div onClick={() => setCompleted(!completed)} className="Todo" data-testid={`todo-${todo.id}`}>
      <h4>{todo.title}</h4>
      <h5>Completed: {completed ? 'Yes' : 'No'}</h5>
    </div>
  )
}

export default Todo;