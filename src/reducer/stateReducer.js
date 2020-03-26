import { v4 as uuidv4 } from 'uuid';
export default function reducer(state, action) {
    let currentDate = new Date();
    // currentDate.setDate(currentDate.getDate()-5)
    currentDate.setUTCHours(0, 0, 0, 0);

    switch (action.type) {
        // case "initialFetch_todo_list":
        //     return {
        //         ...action.data, loader: false
        //     }
        // case "done":
        //     const toggledTodos = state.todos.map(t =>
        //         t.id === action.data.id ?
        //             { ...action.data, complete: !action.data.complete, time: +currentDate } : t
        //     )
        //     return {
        //         ...state, todos: toggledTodos
        //     }
        // case "delete":
        //     let newTodo = state.todos.filter(todo => todo.id !== action.data.id);
        //     return {
        //         ...state, todos: newTodo
        //     }
        // // case "add_todo":
        // //     return {
        // //         ...state, todos: [...state.todos, { id: uuidv4(), text: action.title.trim(), complete: false, time: +currentDate }]
        // //     }
        // case "edit_todo":
        //     let editted_todo = state.todos.findIndex(todo => todo.id === action.data.id);
        //     state.todos[editted_todo].text = action.data.title.trim()
        //     return {
        //         ...state, todos: state.todos
        //     }


        // case "add_goal":
        //     return {
        //         ...state, goals: [...state.goals, {id: uuidv4(), title: action.title.trim()}]
        //     }

        // case "add_todoGoal":
        //     let selectedGoal = state.goals.filter(goal => goal.id === action.selectedGoal.id);
        //     if(selectedGoal.length){
        //         return {
        //             ...state, todos: [...state.todos, {id: uuidv4(), text:action.todoText.trim(), complete: false, time: +currentDate, goal_id:selectedGoal[0].id}]
        //         }
        //     }
        //     else{
        //         return {
        //             ...state, 
        //             todos: [...state.todos, {id: uuidv4(), text:action.todoText.trim(), complete: false, time: +currentDate, goal_id : action.selectedGoal.id}],
        //             goals: [...state.goals, action.selectedGoal]
        //         }
        //     }



        case "SET_NAME":
            localStorage.setItem("name", action.name)
            return {
                ...state, user: { ...state.user, name: action.name }
            };

        case "SET_MAIN_FOCUS":
            localStorage.setItem("main_focus", action.main_focus)
            return {
                ...state, user: { ...state.user, mainFocus: action.main_focus, prevFocus: action.prev_focus }
            };





        case "DONE_TODO":
            const toggleTodos = state.todos.map(t =>
                t.id === action.payload.id
                    ? { ...action.payload, complete: !action.payload.complete, time: +currentDate }
                    : t
            );
            return { ...state, todos: toggleTodos };

        case "CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            };

        case "UPDATE_TODO":
            const updateTodos = state.todos.map(t =>
                t.id === action.payload.id
                    ? { ...action.payload, text: action.text, time: +currentDate }
                    : t
            );
            return {
                ...state, todos: updateTodos, currentTodo: {}
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

        case "CURRENT_GOAL":
            return {
                ...state,
                currentGoal: action.payload
            };

        case "UPDATE_GOAL":
            const updateGoals = state.goals.map(g =>
                g.id === action.payload.id
                    ? { ...action.payload, title: action.title }
                    : g
            )

            return {
                ...state, goals: updateGoals, currentGoal: {}
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