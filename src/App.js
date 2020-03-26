import { Container, Typography } from "@material-ui/core";
import React, { useContext, useReducer } from "react";
import "./App.css";
import SetFocus from "./components/forms/SetFocus";
import SetName from "./components/forms/SetName";
import Greetings from "./components/Greetings";
import LocalTime from "./components/LocalTime";
import MainFocus from "./components/MainFocus";
import TodoList from "./components/todo/TodoList";
import GoalList from "./components/goals/GoalList"
import BoomFitContext from "./context";
import todosReducer from "./reducer";


function App() {
  const initialState = useContext(BoomFitContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <BoomFitContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <header
          className="App-header"
          style={{
            background:
              "no-repeat center url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
            backgroundSize: "cover"
          }}
        >
          <Container maxWidth="lg">
            <LocalTime />
            {state.user.name ? (
              <>
                <Greetings />
                {state.user.mainFocus ? <MainFocus /> : <SetFocus />}
              </>
            ) : (
              <SetName />
            )}

            <Typography variant="overline">
              "All will be alright in time"
            </Typography>
          </Container>
          <GoalList />
          <TodoList />
        </header>
      </div>
    </BoomFitContext.Provider>
  );
}

export default App;
