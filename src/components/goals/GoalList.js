import { Button, Divider, Fade, List, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import goalsStyles from "./goalsStyles";
import GoalItem from "./GoalItem"
import GoalForm from "./GoalForm"

import { StateContext } from "../../context/stateContext";
import TaskGoalProvider from "../../context/taskGoalContext";

function GoalList() {
  const classes = goalsStyles();
  const [goalsToggle, setGoalsToggle] = useState(true);
  // const { state } = useContext(TodosContext);
  const { state } = useContext(StateContext)
  return (
    <>
      <div style={{ position: "absolute", left: 30, top: 15 }}>
        <Button onClick={() => setGoalsToggle(!goalsToggle)}>
          <Typography variant="overline" style={{ color: "#fff" }}>
            Goals
          </Typography>
        </Button>
      </div>
      {goalsToggle ? (
        <Fade in={true} {...{ timeout: 300 }}>
          <div className={classes.container}>
            <GoalForm />
            <Divider />
            <List style={{
              maxHeight: "60vh",
              overflowY: "auto",
              padding: 0
            }}>
              {state.goals.length ?
                state.goals.map(goal => (
                  <div key={goal.id}>
                    <TaskGoalProvider>
                      <GoalItem goal={goal} />
                    </TaskGoalProvider>
                  </div>
                ))
                : null
              }
            </List>
            <Divider />
            {/* <TodoForm /> */}
          </div>
        </Fade>
      ) : null}
    </>
  );
}

export default GoalList;
