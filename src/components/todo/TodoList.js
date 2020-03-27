import { Button, Divider, Fade, List, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import todoStyles from "./todoStyles";

import moment from "moment-timezone"

import { StateContext } from "../../context/stateContext"
import TaskGoalProvider from "../../context/taskGoalContext"



function TodoList() {
  const classes = todoStyles();
  const [todoToggle, setTodoToggle] = useState(true);
  const { state, dispatch } = useContext(StateContext);

  const [type, setType] = useState(1);


  console.log(state)



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
        <Fade in={!state.loading}>
          <div className={classes.container}>
            <div style={{ display: "flex", padding: 10 }}>
              {type === 1 ?
                <Typography variant="subtitle1" onClick={() => setType(0)}>TODAY</Typography>
                :
                <Typography variant="subtitle1" onClick={() => setType(1)}>DONE</Typography>
              }

            </div>
            <Divider />

            <List style={type === 1 ?
              {
                maxHeight: "60vh",
                overflowY: "auto",
                minHeight: "10vh"
              }
              :
              {
                maxHeight: "60vh",
                overflowY: "auto",
                minHeight: "17vh"
              }}>

              {type === 1 ?
                state.todos.length ?
                  state.todos.map(todo => (
                    (!todo.complete) || (todo.complete && todo.time >= +new Date().setUTCHours(0, 0, 0, 0)) ?
                      <div key={todo.id}>
                        <TaskGoalProvider >
                          <TodoItem todo={todo} />
                        </TaskGoalProvider>
                      </div>
                      :
                      null
                  ))
                  : null
                :
                [...new Set(state.todos.map(todo => { if (todo.complete && todo.time < +new Date().setUTCHours(0, 0, 0, 0)) { return todo.time } }))].filter(function (data) { return data != null }).sort(function (a, b) { return b - a }).map(time => (
                  <>
                    <Typography variant="subtitle1">{moment(time).format('ll')}</Typography>
                    {state.todos.map(todo => (
                      (todo.time === time && todo.complete) ?
                        <div key={todo.id}>
                          <TodoItem
                            todo={todo}
                          />
                        </div>
                        :
                        null
                    ))}
                  </>
                ))
              }
            </List>
            <Divider />
            {type === 1 ? <TodoForm /> : null}

          </div>
        </Fade>
      ) : null}
    </>
  );
}

export default TodoList;
