import React, { useContext } from 'react';
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

import TodoList from "./todo/TodoList";
import GoalList from "./goals/GoalList"

import SetFocus from "./forms/SetFocus";
import SetName from "./forms/SetName";
import LocalTime from "./LocalTime";
import MainFocus from "./MainFocus";
import Greetings from "./Greetings";

import { StateContext } from '../context/stateContext';
import TaskGoalProvider from '../context/taskGoalContext';

export default function BoomFitDashboard() {
  const { state } = useContext(StateContext);
  window.addEventListener('beforeunload', () => {
    localStorage.setItem("todo_list", JSON.stringify(state));
  });

  return (
    <TaskGoalProvider>
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
    </TaskGoalProvider>
  )
}
