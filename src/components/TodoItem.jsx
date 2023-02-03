import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_TODO } from '../actionTypes/actionTypes'

const TodoItem = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
  return (
    <div>
        {state.todos.map((todo) => (
          <div key={todo.id} style={{
            borderBottom: "1px solid white",
            display: "flex",
            justifyContent: "space-between"
          }}>
            <h2>{todo.title}</h2>
            <button onClick={(e) => {
              dispatch({
                type: DELETE_TODO,
                payload: {
                title: todo,
                id: todo.id
            }})
            // console.log(todo.id);
            }
            }>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default TodoItem