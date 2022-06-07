import React from 'react';
import ButtonMui from '@mui/material/Button';
import clsx from 'clsx';
import { ButtonComponent } from './type';


const Button: ButtonComponent = props => {
    const { 
        children, 
        className, 
        disabled = false, 
        sx, 
        onClick, 
        variant='contained',
        endIcon,
        startIcon
    } = props;

    const ButtonMuiClassed = clsx("core-button", className);


    const handleClick = () => {
        onClick && onClick()
    }

    return  <ButtonMui
                className={ButtonMuiClassed}
                disabled={disabled}
                sx={sx}
                onClick={handleClick}
                variant={variant}
                endIcon={endIcon}
            > 
                {startIcon ? <span className="core-button-icon-start">{startIcon}</span> : null} {children} 
            </ButtonMui>
}

export default Button;