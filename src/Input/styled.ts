import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

export const CssInput = styled(FormControl)({
  width: '25ch',
  
  "& .core-label":{
    fontSize: "16px",
    fontWeight: 'bold'
  },
  "& .MuiOutlinedInput-root":{
    borderRadius: "2px",

    "& input":{
      border: "unset",
      padding: "6px 17px"
    },
  },
  "& .MuiFormHelperText-root":{
    marginLeft: "0px",
    marginRight: "0px"
  }
});

