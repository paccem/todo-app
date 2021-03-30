import React from 'react'
import { useSelector } from 'react-redux'
import {deleteTodo, todoCompleted } from '../../app/todoSlice'

const TodoList = () => {
    const todoList = useSelector(state => state.todo.todoList)
    const completedTodo = useSelector(state => state.todo.isCompleted)

    const onDelClick = (e) => { e.preventDefault(); deleteTodo()}
    const onCompleteClick = e => {e.preventDefault(); completedTodo()}

    return (
        <div>
            {todoList.map((todo, index) => 
                <h4 key={index} style={{textDecoration : completedTodo ?  "line-through" : "" }} >{todo} <button onClick={onDelClick}>delete</button>
                <button onClick={onCompleteClick}>completed</button></h4>
            )}
        </div>
    )
}

export default TodoList
