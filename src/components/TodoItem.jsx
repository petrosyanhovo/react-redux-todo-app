import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_TODO, COMPLETE_TODO } from '../actionTypes/actionTypes'

const TodoItem = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    // const [isChecked, setIsChecked] = useState(false)
  return (
    <div>
        {state.todos.map((todo) => (
          <div key={todo.id} style={{
            borderBottom: "1px solid white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h2>{todo.title}</h2>
            <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
              dispatch({
                type: COMPLETE_TODO,
                payload: {
                  isCompleted: !todo.isCompleted,
                  id: todo.id,
                  title: todo.title
                }
              })
            }}  />
            <button onClick={(e) => {
              dispatch({
                type: DELETE_TODO,
                payload: {
                  title: todo,
                  id: todo.id
            }})
            }
            }>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default TodoItem