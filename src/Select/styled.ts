import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

export const CssSelect = styled(FormControl)({
  width: '25ch',
  '& .MuiOutlinedInput-root':{
    height: "2em"
  },
  "& .core-label-select":{
    fontSize: "16px",
    fontWeight: 'bold',
  },
  "& .core-helper-select-text":{
    color: "#d32f2f",
    marginLeft: "0",
    marginRight: "0"
  },
  "& .core-select-error-validate":{
    color: "#d32f2f"
  }
});