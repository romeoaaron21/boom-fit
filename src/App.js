import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";



import TodoList from "./components/todo/TodoList";
import GoalList from "./components/goals/GoalList"
import BoomFitContext from "./context";
import todosReducer from "./reducer";

import StateProvider, { StateContext } from "./context/stateContext";

import BoomFitDashboard from "./components/BoomFitDashboard";

function App() {

  return (
    <StateProvider>
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
            <BoomFitDashboard />
          </Container>
          <GoalList />
          <TodoList />
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
