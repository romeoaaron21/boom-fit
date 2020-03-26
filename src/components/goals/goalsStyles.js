import {makeStyles} from "@material-ui/core/styles"

const goalsStyles = makeStyles(theme=>({
    container:{
        position: "absolute",
        left: 30,
        top: 55,
        width: "25vw",
        background: "rgb(39,44,52, 0.6)",
        opacity: 0.5,
        borderRadius: 10,
      },
    goalItemContainer: {
        display: "flex", 
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 5px 5px 5px"
    },
    todoActions: {
      padding: "0px 5px 0 5px",
      display: "flex"
    },

    cssLabel: {
        color : 'white',
      },

      editCssLabel: {
        color : 'white',
        paddingLeft: 1,
        fontSize: 14
        
      },
      cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `${theme.palette.primary.main} !important`,
        },
      },
    
      cssFocused: {},
    
      notchedOutline: {
        borderWidth: '1px',
        borderColor: 'transparent !important ',
        
      },
      
      disabled:{
        background: "#555555 !important",
        color: '#878787 !important'        
      }

}))

export default goalsStyles