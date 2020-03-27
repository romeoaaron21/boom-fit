import { Checkbox, Typography, Chip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import todoStyles from "./todoStyles";
import Fade from '@material-ui/core/Fade';
import Tooltip from "@material-ui/core/Tooltip"

import { StateContext } from "../../context/stateContext"
import { TaskGoalState } from "../../context/taskGoalContext"

function TodoItem({ todo  }) {
  const classes = todoStyles();
  // const { state, dispatch } = useContext(TodosContext);
  const { state, dispatch } = useContext(StateContext);
  const { taskGoalState, taskGoalDispatch } = useContext(TaskGoalState)

  const [editText, setEditText] = useState("");

  const [showOptions, setShowOptions] = useState(false)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onMouseEnter={()=>setShowOptions(true)}
      onMouseLeave={()=>setShowOptions(false)}
      
    >
      {taskGoalState.currentTodo.id === todo.id ? (
        <div className={classes.todoItemContainer}>
          <Checkbox
            checked={todo.complete}
            size="small"
            style={{ color: "#fff" }}
            onChange={() => dispatch({ type: "DONE_TODO", payload: todo })}
          />
          <form onSubmit={e => {
              e.preventDefault()
              dispatch({ type: "UPDATE_TODO", payload: todo, text: editText });
              taskGoalDispatch({ type: "UPDATE_TODO" });
              }}>
            <TextField
              variant="outlined"
              autoFocus
              size="small"
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
                color: "#3C4148"
              }}
              onChange={e => setEditText(e.target.value)}
              onBlur={e => {
                dispatch({ type: "UPDATE_TODO", payload: todo, text: e.target.value })
                taskGoalDispatch({ type: "UPDATE_TODO" })
              }
              }
              defaultValue={taskGoalState.currentTodo.text}
              InputProps={{
                inputAdornedEnd: classes.cssLabel,
                classes: {
                  root: classes.cssOutlinedInput,
                  notchedOutline: classes.notchedOutline,
                  focused: classes.focused,
                  input: classes.editCssLabel,
                  inputAdornedEnd: classes.cssLabel
                }
              }}
              InputLabelProps={{
                style: {
                  color: "white"
                },
                classes: {
                  root: classes.cssLabel,
                  focused: classes.focused
                }
              }}
            />
          </form>
        </div>
      ) : (
        <div className={classes.todoItemContainer}>
          <Checkbox
            checked={todo.complete}
            size="small"
            style={{color:"white"}}
            // style={{ color: state.user.mainFocus===todo.text?"#C786E1":"white" }}
            onChange={() => dispatch({ type: "DONE_TODO", payload: todo })}
          />
          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <Typography
            onClick={() => taskGoalDispatch({ type: "CURRENT_TODO", payload: todo })}
            variant="subtitle2"
            style={{ 
              textDecoration: todo.complete ? "line-through" : "none",
              color: todo.complete? "#939599":"white",
              marginRight: 10
            }}
          >
            {todo.text}
          </Typography>
          <Chip 
            label={state.goals.map(goal=>goal.id===todo.goal_id?goal.title: null)} 
            size="small" 
            color={todo.complete? "default": "primary"}
            style={{
              height: 16, 
              fontSize: 10,
              textDecoration: todo.complete? "line-through": "none"
            }}
         />
         </div>
        </div>
      )}
      {showOptions? 
      <Fade in={showOptions} timeout={100}>
      <div className={classes.todoActions}> 
      <Tooltip title="Set as Main Focus" placement="top">
      <IconButton
          size="small"
          onClick={() => dispatch({type: "SET_MAIN_FOCUS", main_focus: todo.text})}
        >
          <CenterFocusStrongIcon style={{ fontSize: "1vw", 
          // color: state.user.mainFocus===todo.text?"#C786E1":"white" 
          color:"white"
          }} />
        </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top">
        <IconButton
          size="small"
          onClick={() => taskGoalDispatch({ type: "CURRENT_TODO", payload: todo })}
        >
          <EditIcon style={{ fontSize: "1vw", color: "white" }} />
        </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement="top">
        <IconButton
          size="small"
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
        >
          <DeleteIcon style={{ fontSize: "1vw", color: "white" }} />
        </IconButton>
        </Tooltip>
      </div>
      </Fade>
       :null}

    </div>
  );
}

export default TodoItem;
