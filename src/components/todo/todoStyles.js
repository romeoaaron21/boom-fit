import {makeStyles} from "@material-ui/core/styles"

const todoStyles = makeStyles(theme=>({
    container:{
        position: "absolute",
        right: 30,
        bottom: 55,
        width: "25vw",
        background: "rgb(39,44,52, 0.6)",
        opacity: 0.5,
        borderRadius: 10,
      },
    todoItemContainer: {
        display: "flex", 
        alignItems: "center",
        padding: "5px 0px 5px 0px"
    },
    todoActions: {
      padding: "0px 5px 0 5px"
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