import React, { FC, HTMLInputTypeAttribute } from 'react';
import clsx from 'clsx';
import TextField from "@mui/material/TextField";

export interface InputProps{
    className?: string;
    id?: string;
    message?: string
    label?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    onChange?(): void;
}


const Input: FC<InputProps> = props => {

    const { className, id, message, label, type, value, onChange} = props;

    const inputClassName = clsx("core-input", id ? `core-input-${id}` : "", className)

    const onHandleChange= () => {
        onChange && onChange()
    }

    return (
        <TextField 
            id={id}
            className={inputClassName}
            helperText={message}
            label={label}
            type={type}
            value={value}
            onChange={onHandleChange}
        />
    )
}

export default Input;