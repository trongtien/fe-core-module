import React, { FC, HTMLInputTypeAttribute, useEffect, useState, memo, useRef, ChangeEvent } from 'react';
import clsx from 'clsx';
import TextField from "@mui/material/TextField";

export interface InputProps{
    className?: string;
    id?: string;
    message?: string
    label?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    onChangeTimeOut?(val: string): void;
    onChange?(val: string): void;
}

interface IObjectInput{
    valueData?: string | number;
    messageError?: string;
}

const Input: FC<InputProps> = props => {

    const { className, id, message = '', label, type='text', value, onChangeTimeOut, onChange } = props;

    const timeOutCurrent = 500;
    const inputClassName = clsx("core-input", id ? `core-input-${id}` : "", className);
    
    const timer = useRef<ReturnType<typeof setTimeout>>();

    const [ objectDefaultData, setObjectDefaultData] = useState<IObjectInput>({
        messageError: message,
        valueData: value
    })

    useEffect(() => {
        if(message.length === 0){
            setObjectDefaultData({
                ...objectDefaultData,
                messageError: ""
            })
        }
        else if(message !== objectDefaultData.messageError){
            setObjectDefaultData({
                ...objectDefaultData,
                messageError: message ?? ""
            })
        }

        if(objectDefaultData.valueData !== value){
            setObjectDefaultData({
                ...objectDefaultData,
                valueData: value
            })
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                onChangeTimeOut && onChangeTimeOut(value?.toString()??'');
            }, timeOutCurrent);
        }
    }, [value, message])

    const onHandleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        let val = event.target.value;
        if(type === 'number' && isNaN(+val)){
            val = "0"
        }

        onChange && onChange(val.toString());
    }

    return (
        <TextField 
            id={id}
            error={(objectDefaultData?.messageError ?? "")?.length > 0 ? true : false }
            className={inputClassName}
            helperText={objectDefaultData?.messageError ?? ''}
            label={label}
            type={type}
            value={objectDefaultData.valueData}
            onChange={onHandleChangeInput}
        />
    )
}

export default memo(Input);