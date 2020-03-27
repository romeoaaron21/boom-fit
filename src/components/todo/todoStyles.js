import {makeStyles} from "@material-ui/core/styles"

const todoStyles = makeStyles(theme=>({
    container:{
        position: "absolute",
        right: 30,
        bottom: 55,
        width: "425px",
        background: "rgb(39,44,52, 0.6)",
        opacity: 0.5,
        borderRadius: 10,
      },
    todoItemContainer: {
        display: "flex", 
        maxWidth: "70%",
        alignItems: "center",
        padding: "5px 0px 5px 0px"
    },
    todoActions: {
      padding: "2px 5px 2px 5px",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
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

export default todoStyles