import { v4 as uuidv4 } from 'uuid';
export default function taskGoalReducer(state, action) {
    let currentDate = new Date();
    // currentDate.setDate(currentDate.getDate()-5)
    currentDate.setUTCHours(0, 0, 0, 0);

    switch (action.type) {

        case "CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            };

        case "UPDATE_TODO":
            return {
                ...state,
                currentTodo: {}
            };

        case "CURRENT_GOAL":
            return {
                ...state,
                currentGoal: action.payload
            };

        case "UPDATE_GOAL":
            return {
                ...state,
                currentGoal: {}
            };

        case "SET_MAIN_FOCUS":
            return {
                ...state, prevFocus: action.prev_focus
            };

        default:
            return state;
    }

}