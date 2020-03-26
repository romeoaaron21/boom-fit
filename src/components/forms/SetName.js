import React, {useContext, useState} from 'react'
import TextField from "@material-ui/core/TextField"
import useStyles from "../../styles"
import BoomFitContext from "../../context"
function SetName() {
    const classes = useStyles() 
    const {dispatch} = useContext(BoomFitContext)
    const [name, setName] = useState("")

    const handleSubmit = e => {
      e.preventDefault()
      dispatch({type: 'SET_NAME', name: name})
    }

    return (
        <div>   
          <h3>What's your name?</h3>
          <form type="submit" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            autoFocus
            style={{width:"60%"}}
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
            onChange={e=>setName(e.target.value)}
          />
          </form>
          </div>
    )
}

export default SetName
