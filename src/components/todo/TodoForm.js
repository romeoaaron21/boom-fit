import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import todoStyles from "./todoStyles";
import TodosContext from "../../context";
import MenuItem from "@material-ui/core/MenuItem";

import { StateContext } from "../../context/stateContext";



import Autocomplete from '@material-ui/lab/Autocomplete';



import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

  inputRoot: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      // borderColor: "green"
      border: "none"
    },
    // "&:hover .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "red"
    // },
    // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "purple"
    // }
  },
}));

function TodoForm() {
  const classes1 = useStyles();
  const { state, dispatch } = useContext(StateContext);
  const [todo, setTodo] = useState("");
  const classes = todoStyles();
  const [selectedGoal, setSelectedGoal] = useState("")


  const handleSubmit = e => {
    e.preventDefault();
    let checkGoal = state.goals.filter(goal => goal.id === selectedGoal || goal.title === selectedGoal);

    if (checkGoal.length) {
      dispatch({ type: "ADD_TODO", payload: todo, tag: checkGoal[0].id });
    }
    else {
      dispatch({ type: "ADD_TODO_GOAL", payload: todo, tag: selectedGoal });
    }
    setTodo("");
  };


  const handleChange = (event, value) => {
    if (value) {
      let checkGoal = state.goals.filter(goal => goal.id === selectedGoal || goal.title === selectedGoal);
      if (!checkGoal.length && event.key === "Enter" && !value.id && todo !== "") {
        dispatch({ type: "ADD_TODO_GOAL", payload: todo, tag: value });
        setTodo("");
      }
      else if (checkGoal.length && event.key === "Enter" && todo !== "") {
        dispatch({ type: "ADD_TODO", payload: todo, tag: checkGoal[0].id });
        setTodo("");
      }
      else {
        setSelectedGoal(value.id)
      }
    }

  }



  return (
    // <form onSubmit={handleSubmit}>
    <div style={{ display: "flex", alignItems: "center", padding: 5 }}>
      <TextField
        onKeyUp={(e) => {
          if (e.key === "Enter" && selectedGoal !== "") {
            handleSubmit(e)
          }
        }}
        variant="outlined"
        autoFocus
        size="small"
        style={{ width: "60%" }}
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

      {/* <TextField
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
          value={selectedGoal}
          onChange={e=>setSelectedGoal(e.target.value)}
        >
          {state.goals.map(goal => (
            <MenuItem key={goal.id} value={goal.id}>
              {goal.title}
            </MenuItem>
          ))}
        </TextField> */}

      {/* <div style={{ width: "40%" }}> */}
      <Autocomplete
        popupIcon
        closeIcon
        onChange={handleChange}
        options={state.goals}
        classes={classes1}
        style={{ width: "40%" }}
        getOptionLabel={option => option.title}
        freeSolo
        renderInput={params =>
          <TextField
            {...params}
            label="Select Goal"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "white"
              },
              classes: {
                root: classes.cssLabel,
                focused: classes.focused
              }
            }}
            onKeyUp={e=>{if(e.key==="Enter"){
              let event={key:"Enter"}
              handleChange(event,selectedGoal)
            }}}
            onChange={e => setSelectedGoal(e.target.value)}
          />
        }
      />
      {/* </div> */}



    </div>
    // </form>
  );
}

export default TodoForm;

