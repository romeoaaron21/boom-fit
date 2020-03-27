import { v4 as uuidv4 } from 'uuid';
export default function reducer(state, action) {
    let currentDate = new Date();
    // currentDate.setDate(currentDate.getDate()-1)
    currentDate.setUTCHours(0, 0, 0, 0);

    switch (action.type) {

        case "initialFetch_todo_list":
            return {
                ...action.data, loader: false
            }

        case "SET_NAME":
            return {
                ...state, user: { ...state.user, name: action.name }
            };

        case "SET_MAIN_FOCUS":
            return {
                ...state, user: { ...state.user, mainFocus: action.main_focus }
            };





        case "DONE_TODO":
            const toggleTodos = state.todos.map(t =>
                t.id === action.payload.id
                    ? { ...action.payload, complete: !action.payload.complete, time: +currentDate }
                    : t
            );
            return { ...state, todos: toggleTodos };

        case "UPDATE_TODO":
            const updateTodos = state.todos.map(t =>
                t.id === action.payload.id
                    ? { ...action.payload, text: action.text, time: +currentDate }
                    : t
            );
            return {
                ...state, todos: updateTodos
            };

        case "REMOVE_TODO":
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
            return {
                ...state, todos: filteredTodos
            };

        case "ADD_TODO":
            const newTodo = {
                id: uuidv4(),
                goal_id: action.tag,
                text: action.payload,
                complete: false,
                time: +currentDate
            };
            const addedTodo = [...state.todos, newTodo];
            return {
                ...state, todos: addedTodo
            };



        case "ADD_GOAL":
            const newGoal = {
                id: uuidv4(),
                title: action.payload
            }
                ;
            const addedGoal = [...state.goals, newGoal];
            return {
                ...state, goals: addedGoal
            };


        case "UPDATE_GOAL":
            const updateGoals = state.goals.map(g =>
                g.id === action.payload.id
                    ? { ...action.payload, title: action.title }
                    : g
            )

            return {
                ...state, goals: updateGoals
            };

        case "REMOVE_GOAL":
            const filteredGoals = state.goals.filter(t =>
                t.id !== action.payload.id
            )
            const filterTodoFromGoals = state.todos.filter(t =>
                t.goal_id !== action.payload.id
            )

            return {
                ...state, goals: filteredGoals, todos: filterTodoFromGoals
            }


        default:
            return state;
    }
}