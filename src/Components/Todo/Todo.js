import React from 'react'

function Todo(props) {

  const {todo} = props
  return(
    <div className="Todo" data-testid='todo-1'>
      Hello Todo!
    </div>
  )
}

export default Todo;