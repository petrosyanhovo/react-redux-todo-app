import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
} from "../actionTypes/actionTypes";
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
        case COMPLETE_TODO:
            state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        console.log("DAA");
                        return {
                            ...state,
                            isCompleted: true,
                        };
                    }
                })
            // return {
            //     ...state,
            //     ...state.todos.map((todo) => {
            //         if (todo.id === action.payload.id) {
            //             return {
            //                 ...todo,
            //                 isCompleted: true,
            //             };
            //         }
            //     }),
            // };
        default:
            return state;
    }
};

export default todoReducer;
