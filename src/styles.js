import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(theme => ({
    cssLabel: {
      color : 'white',
      fontSize: 40
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: `${theme.palette.primary.main} !important`,
      }
    },
  
    cssFocused: {},
  
    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'white !important ',
      
    },
    
    disabled:{
      background: "#555555 !important",
      color: '#878787 !important'
      
    }
  }));

  export default useStyles