import React, {useContext} from 'react';
import { Typography } from "@material-ui/core";

import SetFocus from "./forms/SetFocus";
import SetName from "./forms/SetName";
import LocalTime from "./LocalTime";
import MainFocus from "./MainFocus";
import Greetings from "./Greetings";

import { StateContext } from '../context/stateContext';

export default function BoomFitDashboard() {
    const {state} = useContext(StateContext)

    return (
        <div>
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
        </div>
    )
}
