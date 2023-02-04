import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../actions/todoAction'
import { ADD_TODO } from '../actionTypes/actionTypes'


const TodoForm = () => {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch()
  return (
    <div className='todo-form'>
        <input type="text" value={todo} onChange={(e) => {
            setTodo(e.target.value)
        }} />
        <button onClick={(e) => {
            dispatch({
              type: ADD_TODO,
              payload: {
                title: todo
          }})
          setTodo('')
        }
          }>Add Todo</button>
    </div>
  )
}

export default TodoForm