import { Typography } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import goalsStyles from "./goalsStyles";

import { StateContext } from "../../context/stateContext";
import { TaskGoalState } from "../../context/taskGoalContext"

function GoalItem({ goal }) {
  const classes = goalsStyles();
  // const { state, dispatch } = useContext(TodosContext);
  const { state, dispatch } = useContext(StateContext);
  const { taskGoalState, taskGoalDispatch } = useContext(TaskGoalState);

  const [editText, setEditText] = useState("");

  const [showOptions, setShowOptions] = useState(false);
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          className={classes.goalItemContainer}
          style={{
            background: "rgb(55, 62, 73, 0.6)"
          }}
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
        >
          {taskGoalState.currentGoal.id === goal.id ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="small"
                color="secondary"
                onClick={() => setShowTodo(!showTodo)}
              >
                {showTodo ? <ExpandMoreIcon /> : <ChevronRightIcon />}
              </IconButton>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  dispatch({ type: "UPDATE_GOAL", payload: goal, title: editText });
                  taskGoalDispatch({ type: "UPDATE_GOAL" });
                }}
              >
                <TextField
                  variant="outlined"
                  autoFocus
                  size="small"
                  style={{
                    color: "#3C4148"
                  }}
                  onChange={e => setEditText(e.target.value)}
                  onBlur={e => {
                    dispatch({ type: "UPDATE_GOAL", payload: goal, title: e.target.value })
                    taskGoalDispatch({ type: "UPDATE_GOAL" });
                  }}
                  defaultValue={taskGoalState.currentGoal.title}
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={() => setShowTodo(!showTodo)}
                >
                  {showTodo ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                </IconButton>
                <Typography
                  variant="overline"
                  style={{
                    color: "white",
                    fontWeight: "800"
                  }}
                >
                  {goal.title} (
                {state.todos.filter(todo => goal.id === todo.goal_id).length}
                )
              </Typography>
              </div>
            )}

          {showOptions ? (
            <Fade in={showOptions} timeout={100}>
              <div className={classes.todoActions}>
                <Tooltip title="Edit" placement="top">
                  <IconButton
                    size="small"
                    onClick={() => {
                      dispatch({ type: "CURRENT_GOAL", payload: goal })
                      taskGoalDispatch({ type: "CURRENT_GOAL", payload: goal })
                    }
                    }
                  >
                    <EditIcon style={{ fontSize: "1vw", color: "white" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete" placement="top">
                  <IconButton
                    size="small"
                    onClick={() =>
                      dispatch({ type: "REMOVE_GOAL", payload: goal })
                    }
                  >
                    <DeleteIcon style={{ fontSize: "1vw", color: "white" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Fade>
          ) : null}
        </div>
      </div>

      <Collapse in={showTodo} transition="auto">
        {showTodo
          ? state.todos.map(todo =>
            todo.goal_id === goal.id ? (
              <div key={todo.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5px 0px"
                  }}
                >
                  <div className={classes.goalItemContainer}>
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "white",
                        paddingLeft: 10,
                        display: "flex",
                        alignItems: "center",
                        textDecoration: todo.complete
                          ? "line-through"
                          : "none"
                      }}
                    >
                      {todo.complete ? (
                        <CheckCircleIcon
                          color="secondary"
                          style={{ fontSize: 15, marginRight: 5 }}
                        />
                      ) : (
                          <RadioButtonCheckedIcon
                            color="default"
                            style={{ fontSize: 15, marginRight: 5 }}
                          />
                        )}

                      {todo.text}
                    </Typography>
                  </div>
                </div>
                <Divider />
              </div>
            ) : null
          )
          : null}
      </Collapse>
    </div>
  );
}

export default GoalItem;
