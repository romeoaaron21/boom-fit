import Fade from "@material-ui/core/Fade";
import React, { useContext } from 'react';
import BoomFitContext from "../context";


function Greetings() {
    const { state } = useContext(BoomFitContext);
    const name = state.user.name
    return (
        <Fade in={true}
        {...({ timeout: 1000 })}
       >
       <h2 style={{fontSize: "3vw", margin: "10px 0px"}}>Hello, {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}.</h2>
       </Fade>
    )
}

export default Greetings
