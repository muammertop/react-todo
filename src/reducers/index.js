import { ADD, REMOVE, TOGGLE } from '../actions'; 

const initialState = {
    todos:  JSON.parse(localStorage.getItem('todos')) || []
};
let newTodos;

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
           newTodos = {
                ...state, todos: [
                    ...state.todos, {
                        id: state.todos.length + 1,
                        name: action.payload,
                        completed: false,
                    }
                ]
            }
            localStorage.setItem('todos', JSON.stringify(newTodos.todos));
            return newTodos;
        case TOGGLE:
            newTodos = {
                ...state, todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
            }
            localStorage.setItem('todos', JSON.stringify(newTodos.todos));
            return newTodos;
        case REMOVE:
            newTodos = {
                ...state, todos: state.todos.filter(todo => todo.id !== action.payload)
            }
            localStorage.setItem('todos', JSON.stringify(newTodos.todos));
            return newTodos; 
        default:
            return state;
    }
}