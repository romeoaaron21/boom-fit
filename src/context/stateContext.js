import React, { createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/stateReducer"

import { v4 as uuidv4 } from 'uuid';

export const StateContext = createContext();

let initialTodosContext = {
    user: {
        name:"",
        mainFocus:"",
        prevFocus:"",
    },
    loader: true,
    todos:[
        { id: uuidv4(), goal_id:"1", text: "send trends in email", complete: true, time:1585080500000},
        { id: "123", goal_id:"1", text: "Sample 2", complete: false, time:1585180800000},
        { id: uuidv4(), goal_id:"2", text: "Sample 3", complete: false, time:1585180800000},
        { id: uuidv4(), goal_id:"3", text: "Sample 4", complete: false, time:1585180800000},
    ],
    goals:[
        {id:"1", title:"Goal 1"},
        {id:"2", title:"Goal 2"},
        {id:"3", title:"Goal 3"},
    ],
    currentGoal:{},
    
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialTodosContext);

    useEffect(() => {
        initialTodosContext = localStorage.getItem("todo_list") ? JSON.parse(localStorage.getItem("todo_list")) : initialTodosContext
        setTimeout(() => {
            dispatch({ type: "initialFetch_todo_list", data: initialTodosContext })
        },2000)
    }, [])

    return (
		<StateContext.Provider value={{state, dispatch}}>
			{children}
		</StateContext.Provider>
	);
}


export default StateProvider;