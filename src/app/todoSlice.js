import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: []  
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteTodo : (state, action) => {
            state.todoList.filter((todo) => todo.id !== action.payload)
        }
    }
})
export default todoSlice.reducer
export const { addTodo, deleteTodo,} = todoSlice.actions