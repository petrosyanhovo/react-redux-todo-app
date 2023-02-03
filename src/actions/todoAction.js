import { ADD_TODO, DELETE_TODO } from "../actionTypes/actionTypes";

const addTodo = () => {
    return {
        type: ADD_TODO,
        payload: {
            title: e.target.value
        }
    };
};

const deleteTodo = () => {
    return {
        type: DELETE_TODO,
    };
};

export { addTodo, deleteTodo };
