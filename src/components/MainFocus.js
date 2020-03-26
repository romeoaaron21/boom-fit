import React, { useContext } from "react";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import BoomFitContext from "../context";
function MainFocus() {
  const { state, dispatch } = useContext(BoomFitContext);
  const prevFocusHandler = localStorage.getItem("main_focus")
  const handleEditFocus = () =>(
    dispatch({type: "SET_MAIN_FOCUS", main_focus: "", prev_focus: prevFocusHandler})
  )

  return (
    <Fade in={true} {...{ timeout: 1500 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <h3 style={{ fontSize: "2vw" }}>&bull;&nbsp; {state.user.mainFocus}</h3>
        <IconButton style={{ marginLeft: 10 }} onClick={handleEditFocus}>
          <EditIcon style={{ color: "white", fontSize: "2vw" }} />
        </IconButton>
      </div>
    </Fade>
  );
}

export default MainFocus;
