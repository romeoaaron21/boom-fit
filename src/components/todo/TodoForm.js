import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import todoStyles from "./todoStyles";
import TodosContext from "../../context";
import MenuItem from "@material-ui/core/MenuItem";

import { StateContext } from "../../context/stateContext"

function TodoForm() {
  // const { state, dispatch } = useContext(TodosContext);
  const { state, dispatch } = useContext(StateContext);
  const [todo, setTodo] = useState("");
  const classes = todoStyles();
  const [selectedTag, setSelectedTag] = useState(1)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo, tag: selectedTag});
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "center", padding: 5 }}>
        <TextField
          variant="outlined"
          autoFocus
          size="small"
          style={{ width: "75%" }}
          onChange={e => setTodo(e.target.value)}
          value={todo}
          placeholder="New Todo"
          InputProps={{
            inputAdornedEnd: classes.cssLabel,
            classes: {
              root: classes.cssOutlinedInput,
              notchedOutline: classes.notchedOutline,
              focused: classes.focused,
              input: classes.cssLabel,
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

        <TextField
          id="standard-select-currency"
          select
          style={{
            width: "25%",
            background: "rgb(33, 37, 44)",
            borderRadius: 10
          }}
          variant="outlined"
          InputProps={{
            inputAdornedEnd: classes.cssLabel,
            classes: {
              root: classes.cssOutlinedInput,
              notchedOutline: classes.notchedOutline,
              focused: classes.focused,
              input: classes.cssLabel,
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
          value={selectedTag}
          onChange={e=>setSelectedTag(e.target.value)}
        >
          {state.goals.map(goal => (
            <MenuItem key={goal.id} value={goal.id}>
              {goal.title}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}

export default TodoForm;
