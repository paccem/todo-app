import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../../app/todoSlice'


const TodoList = () => {
    const todoList = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch()

    // const DeleteTodo = (id) => {
    //     dispatch(deleteTodo(id))
    // }

    // const completeTodo = (id) => {
    //     todoList.map((todo) =>{
    //         if (todo.id === id) {
    //             todo.isCompleted = !todo.isCompleted
    //         }
    //         return todo
    //     })
        
    // }

    return (
        <div className='container mt-4'>
            <h3 className='mb-5'>Todo List</h3>
            {todoList.map(todo => {
                return(
                    <div key={todo.id} className='container mb-3 col-sm-8'>
                        <span className='row bg-info rounded align-content-center' > 
                            <h5 className='col-sm-6 text-start text-white text-capitalize'>{todo.text}</h5>  
                            <button className='btn btn-danger col me-3'>delete</button>
                            <button  className='btn btn-primary col' >completed</button>
                        </span>
                    </div>  
                )
            })}
        </div>
    )
}

export default TodoList

// style={{textDecoration : completedTodo ?  "line-through" : "" }}