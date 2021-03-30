import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: [],
    isCompleted: false
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteTodo : (state, action) => {
            state.todoList.pop(action.id)
        },
        todoCompleted : state => {
            return !state.isCompleted
        }

    }
})
export default todoSlice.reducer
export const { addTodo, deleteTodo, todoCompleted } = todoSlice.actions