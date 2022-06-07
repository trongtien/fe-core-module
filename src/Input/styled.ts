import { styled } from '@mui/material/styles';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import { InputProps } from './type';

export const CssInput = styled(FormControl,{
  shouldForwardProp: props => {
    return ([
      'message'
    ] as PropertyKey[]).indexOf(props) === -1
  }
})<InputProps & FormControlProps>(({
  message
}) => {

  const isValidateError = (message ?? '').length ? true : false;
  const colorText = isValidateError ? 'red' : '#333'
  const colorBorder = isValidateError ? 'red' : '#333'

  return {
    width: '25ch',
    "& .core-label":{
      fontSize: "16px",
      fontWeight: 'bold',
      color: colorText + '!important'
    },
    
    "& .MuiOutlinedInput-root":{
      borderRadius: "2px",
      "& .Mui-focused":{
        border: 'unset',
        outline: 'unset !important'
      },

      "& input":{
        border: `1px solid ${colorBorder} !important`,
        padding: "6px 17px",
        outline: 'unset !important'
      },
      "& input:focus":{
        border: `1px solid ${colorBorder} !important`,
        outline: 'unset !important'
      },
      "& input:hover":{
        border: `1px solid ${colorBorder} !important`,
        outline: 'unset !important'
      }
    },
    "& .MuiFormHelperText-root":{
      marginLeft: "0px",
      marginRight: "0px",
      color: colorText + '!important'
    }
  }
})




