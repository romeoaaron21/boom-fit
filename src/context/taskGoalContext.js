import React, { createContext, useReducer } from "react";
import taskGoalReducer from "../reducer/taskGoalReducer"

import { v4 as uuidv4 } from 'uuid';

export const TaskGoalState = createContext();

let initialTaskGoalState = {
    currentTodo:{},
    currentGoal:{},
    prevFocus:"",
}

const TaskGoalProvider = ({ children }) => {
    const [taskGoalState, taskGoalDispatch] = useReducer(taskGoalReducer, initialTaskGoalState);


    return (
		<TaskGoalState.Provider value={{taskGoalState, taskGoalDispatch}}>
			{children}
		</TaskGoalState.Provider>
	);
}


export default TaskGoalProvider;