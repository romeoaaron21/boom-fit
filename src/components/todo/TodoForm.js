// import React, { useContext, useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import todoStyles from "./todoStyles";
// import TodosContext from "../../context";
// import MenuItem from "@material-ui/core/MenuItem";

// import { StateContext } from "../../context/stateContext";




// import { makeStyles } from '@material-ui/core/styles';
// import useAutocomplete from '@material-ui/lab/useAutocomplete';

// const useStyles = makeStyles(theme => ({
//   label: {
//     display: 'block',
//   },
//   input: {
//     width: "100%"
//   },
//   listbox: {
//     width: "100%",
//     fontSize: "12px",
//     margin: 0,
//     padding: 0,
//     zIndex: 1,
//     position: 'absolute',
//     listStyle: 'none',
//     backgroundColor: "black",
//     overflow: 'auto',
//     maxHeight: 400,
//     border: '1px solid rgba(0,0,0,.25)',
//     '& li[data-focus="true"]': {
//       backgroundColor: '#4a8df6',
//       color: 'white',
//       cursor: 'pointer',
//     },
//     '& li:active': {
//       backgroundColor: '#2977f5',
//       color: 'white',
//     },
//   },
// }));


// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
//   { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
//   { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
//   { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
// ];


// function TodoForm() {

//   const classeses = useStyles();
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: 'use-autocomplete-demo',
//     options: top100Films,
//     getOptionLabel: option => option.title,
//   });



//   // const { state, dispatch } = useContext(TodosContext);
//   const { state, dispatch } = useContext(StateContext);
//   const [todo, setTodo] = useState("");
//   const classes = todoStyles();
//   const [selectedTag, setSelectedTag] = useState(1)

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch({ type: "ADD_TODO", payload: todo, tag: selectedTag });
//     setTodo("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div style={{ display: "flex", alignItems: "center", padding: 5 }}>
//         <TextField
//           variant="outlined"
//           autoFocus
//           size="small"
//           style={{ width: "60%" }}
//           onChange={e => setTodo(e.target.value)}
//           value={todo}
//           placeholder="New Todo"
//           InputProps={{
//             inputAdornedEnd: classes.cssLabel,
//             classes: {
//               root: classes.cssOutlinedInput,
//               notchedOutline: classes.notchedOutline,
//               focused: classes.focused,
//               input: classes.cssLabel,
//               inputAdornedEnd: classes.cssLabel
//             }
//           }}
//           InputLabelProps={{
//             style: {
//               color: "white"
//             },
//             classes: {
//               root: classes.cssLabel,
//               focused: classes.focused
//             }
//           }}
//         />

//         {/* <TextField
//           id="standard-select-currency"
//           select
//           style={{
//             width: "25%",
//             background: "rgb(33, 37, 44)",
//             borderRadius: 10
//           }}
//           variant="outlined"
//           InputProps={{
//             inputAdornedEnd: classes.cssLabel,
//             classes: {
//               root: classes.cssOutlinedInput,
//               notchedOutline: classes.notchedOutline,
//               focused: classes.focused,
//               input: classes.cssLabel,
//               inputAdornedEnd: classes.cssLabel
//             }
//           }}
//           InputLabelProps={{
//             style: {
//               color: "white"
//             },
//             classes: {
//               root: classes.cssLabel,
//               focused: classes.focused
//             }
//           }}
//           value={selectedTag}
//           onChange={e=>setSelectedTag(e.target.value)}
//         >
//           {state.goals.map(goal => (
//             <MenuItem key={goal.id} value={goal.id}>
//               {goal.title}
//             </MenuItem>
//           ))}
//         </TextField> */}

// <div style={{width:"40%"}}>
//         <div {...getRootProps()}>
//           {groupedOptions.length > 0 ? (
//             <ul className={classeses.listbox} {...getListboxProps()}>
//               {groupedOptions.map((option, index) => (
//                 <li {...getOptionProps({ option, index })}>{option.title}</li>
//               ))}
//             </ul>
//           ) : null}
//           <input className={classeses.input} {...getInputProps()} />
//         </div>
//         </div>


//       </div>
//     </form>
//   );
// }

// export default TodoForm;







import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import todoStyles from "./todoStyles";
import TodosContext from "../../context";
import MenuItem from "@material-ui/core/MenuItem";

import { StateContext } from "../../context/stateContext";



import Autocomplete from '@material-ui/lab/Autocomplete';



// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   inputRoot: {
//     color: "white",
//     "& .MuiOutlinedInput-notchedOutline": {
//       // borderColor: "green"
//       border:"none"
//     },
//     // "&:hover .MuiOutlinedInput-notchedOutline": {
//     //   borderColor: "red"
//     // },
//     // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     //   borderColor: "purple"
//     // }
//   }
// }));

// const top100Films = [
//   { title: 'Braveheart', year: 1995 },
//   { title: 'M', year: 1931 },
//   { title: 'Requiem for a Dream', year: 2000 },
//   { title: 'Amélie', year: 2001 },
//   { title: 'A Clockwork Orange', year: 1971 },
//   { title: 'Like Stars on Earth', year: 2007 },
//   { title: 'Taxi Driver', year: 1976 },
//   { title: 'Lawrence of Arabia', year: 1962 },
//   { title: 'Double Indemnity', year: 1944 },
//   { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
//   { title: 'Amadeus', year: 1984 },
//   { title: 'To Kill a Mockingbird', year: 1962 },
//   { title: 'Toy Story 3', year: 2010 },
//   { title: 'Logan', year: 2017 },
//   { title: 'Full Metal Jacket', year: 1987 },
//   { title: 'Dangal', year: 2016 },
//   { title: 'The Sting', year: 1973 },
//   { title: '2001: A Space Odyssey', year: 1968 },
//   { title: "Singin' in the Rain", year: 1952 },
//   { title: 'Toy Story', year: 1995 },
//   { title: 'Bicycle Thieves', year: 1948 },
//   { title: 'The Kid', year: 1921 },
//   { title: 'Inglourious Basterds', year: 2009 },
//   { title: 'Snatch', year: 2000 },
//   { title: '3 Idiots', year: 2009 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];


function TodoForm() {
  // const classeses = useStyles();
  const { state, dispatch } = useContext(StateContext);
  const [todo, setTodo] = useState("");
  const classes = todoStyles();
  const [selectedTag, setSelectedTag] = useState(1)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo, tag: selectedTag });
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

        {/* <div style={{width:"40%"}}>
          <Autocomplete
            id="combo-box-demo"
            options={state.goals}
            classes={classeses}
            getOptionLabel={option => option.title}
            renderInput={params => <TextField {...params} label="Combo box" variant="outlined" />}
          />
        </div> */}



      </div>
    </form>
  );
}

export default TodoForm;

