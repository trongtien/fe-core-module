import React, { FC, HTMLInputTypeAttribute, useEffect, useState, memo, useRef, ChangeEvent } from 'react';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/system';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { CssInput } from './styled';

export interface InputProps{
    className?: string;
    id?: string;
    message?: string
    label?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    placeholder?: string;
    onChangeTimeOut?(val: string): void;
    onChange?(val: string): void;
    fullWidth?: boolean;
    disabled?: boolean;
    sx?:SxProps<Theme>;
}

interface IObjectInput{
    valueData?: string | number;
    messageError?: string;
}

const Input: FC<InputProps> = props => {

    const { className, id, message = '', label, type='text', value, onChangeTimeOut, onChange, fullWidth, placeholder, disabled=false, sx={} } = props;

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
        <CssInput
            fullWidth={fullWidth}
            className={inputClassName}
            id={id}
            disabled={disabled}
            sx={sx}
        >
            {
                !!label && 
                <FormLabel 
                    color={(objectDefaultData && objectDefaultData.messageError &&  objectDefaultData.messageError.length !== 0) ? "error" : undefined} 
                    className="core-label"
                >
                    {label}
                </FormLabel>
            }
            
            <OutlinedInput 
                placeholder={placeholder}
                onChange={onHandleChangeInput}
                value={objectDefaultData.valueData}
                type={type}
            />

            <FormHelperText children={message} className='core-helper-text'/>
        </CssInput>
    )
}

export default memo(Input);