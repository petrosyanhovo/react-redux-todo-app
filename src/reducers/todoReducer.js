import { ADD_TODO, DELETE_TODO } from "../actionTypes/actionTypes";
const initialState = {
    todos: [
        {
            title: "React",
            id: Math.random(),
            isCompleted: false,
        },
        {
            title: "Redux",
            id: Math.random(),
            isCompleted: false,
        },
    ],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload.title,
                        id: Math.random(),
                        isCompleted: false,
                    },
                ],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter((t) => t.id !== action.payload.id),
                ],
            };
        default:
            return state;
    }
};

export default todoReducer;
