import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../app/todoSlice'


const AddTodo = () => {
    const [todoItem, setTodoItem] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => setTodoItem(e.target.value)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (!todoItem) return;
        dispatch(addTodo(todoItem))
        setTodoItem('')
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="todoItem"> Todo item</label>
                    <input type="text"
                        name='todoItem'
                        placeholder='Add a todo item'
                        value={todoItem}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <button className='btn btn-primary'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
