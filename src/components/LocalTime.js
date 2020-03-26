import React from 'react'
import Fade from "@material-ui/core/Fade"
import moment from "moment-timezone"
function LocalTime() {
    return (
        <Fade in={true}
        {...({ timeout: 1000 })}
       >
       <h1 style={{fontSize: "6vw", margin: 0}}>{moment().format("LT")}</h1>
       </Fade>
    )
}

export default LocalTime
