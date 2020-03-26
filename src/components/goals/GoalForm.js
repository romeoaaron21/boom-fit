import React, {useContext, useState} from 'react'
import TextField from "@material-ui/core/TextField"
import goalsStyles from "./goalsStyles"
import TodosContext from "../../context"


function GoalForm() {
const { dispatch } = useContext(TodosContext);
const [goal, setGoal] = useState("");
const classes = goalsStyles();

const handleSubmit = e => {
  e.preventDefault();
  dispatch({ type: "ADD_GOAL", payload: goal });
  setGoal("");
};
    return (
        <form onSubmit={handleSubmit}> 
        <div style={{display: "flex", padding: 5}}>
           <TextField
            variant="outlined"
            autoFocus
            size="small"
            style={{width:"80%"}}
            onChange={e=>setGoal(e.target.value)}
            value={goal}
            placeholder="New Goal"
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

        </div>
        </form> 
    )
}

export default GoalForm
