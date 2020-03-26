import { Button, Divider, Fade, List, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import todoStyles from "./todoStyles";

function TodoList() {
  const classes = todoStyles();
  const [todoToggle, setTodoToggle] = useState(true);
  const { state } = useContext(TodosContext);
  
  return (
    <>
      <div style={{ position: "absolute", right: 30, bottom: 15 }}>
        <Button onClick={() => setTodoToggle(!todoToggle)}>
          <Typography variant="overline" style={{ color: "#fff" }}>
            My Tasks
          </Typography>
        </Button>
      </div>
      {todoToggle ? (
        <Fade in={true} {...{ timeout: 300 }}>
          <div className={classes.container}>
            <div style={{ display: "flex", padding: 10 }}>
              <Typography variant="subtitle1">TODAY</Typography>
            </div>
            <Divider />
            <List style={{
                maxHeight:"60vh",
                overflowY: "auto",
            }}>
            {state.todos.length?
              state.todos.map(todo=>(
                todo.user_id === state.user.user_id?
                <div key={todo.id}>
                <TodoItem 
                  todo={todo}
                />
                </div>
                :null
              ))
              :null
            }
            </List>
            <Divider />
            <TodoForm />
          </div>
        </Fade>
      ) : null}
    </>
  );
}

export default TodoList;
