import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../app/todoSlice'
import {nanoid} from 'nanoid'


const AddTodo = () => {
    const [todoItem, setTodoItem] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => setTodoItem(e.target.value)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            id:nanoid(),
            text: todoItem,
            isCompleted: false
        }
        if (!todoItem) return;
        dispatch(addTodo(newTodo))
        setTodoItem('')
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler} className='col-sm-6 mx-auto p-4'>
                <h2>Add Todo</h2>
                <div className="input-group">
                    <input type="text"
                        name='todoItem'
                        placeholder='Add a todo item'
                        value={todoItem}
                        onChange={handleChange}
                        className='form-control'
                    />
                    <button className='btn btn-primary'>Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
