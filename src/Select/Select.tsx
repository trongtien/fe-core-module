import React, { FC, useState, useRef, useEffect, useLayoutEffect } from 'react';
import FormLabel from '@mui/material/FormLabel';
import SelectMui, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import clsx from 'clsx';
import { CssSelect } from './styled';

export interface OptionSelect{
  label: string;
  value: string;
}

export interface SelectProps{
  className?: string;
  id?: string;
  message?: string
  label?: string;
  value?: string | number;
  placeholder?: string;
  onChangeTimeOut?(val: string): void;
  onChange?(val: string): void;
  fullWidth?: boolean;
  options?: OptionSelect[];
  disabled?: boolean;
}

interface IObjectSelect{
  valueData?: string | number;
  messageError: string;
}

const Select: FC<SelectProps> = props => {

  const { label, message = '', value, options = [], id, disabled = false, onChange, fullWidth=false } = props
  const timeOutCurrent = 500;

  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [ defaultOption, setDefaultOption ] = useState<OptionSelect[]>(options);
  const [ objectDefaultData, setObjectDefaultData] = useState<IObjectSelect>({
    messageError: message,
    valueData: value
  })

  useLayoutEffect(() => {
    setDefaultOption(options);
  }, [])

  useEffect(() => {
    // Change reload message error
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

    // Change reload select data 
    if(objectDefaultData.valueData !== value){
        setObjectDefaultData({
            ...objectDefaultData,
            valueData: value
        })
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          onChange && onChange(value?.toString()??'');
        }, timeOutCurrent);
    } 
  }, [value, message])

  const onHandleChanceSelect = (e: SelectChangeEvent<string | number>) => {
    onChange && onChange(e.target.value.toString())
  }


  // Config style option select
  const MenuProps = {
    PaperProps: {
      sx: {
        top: "70px!important",
      },
    },
  };

  return  (
    <CssSelect disabled={disabled} fullWidth={fullWidth} id={id} className={id ? `core-select-outline-${id}` : 'core-select-outline'}> 
      {
        !!label && 
        <FormLabel 
            color={(objectDefaultData && objectDefaultData.messageError &&  objectDefaultData.messageError.length !== 0) ? "error" : undefined} 
            className={clsx("core-label-select", (objectDefaultData && objectDefaultData.messageError && objectDefaultData.messageError?.length) > 0 ? 'core-select-error-validate' : "")}
        >
            {label}
        </FormLabel>
      }

        <SelectMui
          id={clsx("core-select",id ? `core-select-${id}` : "")}
          value={objectDefaultData.valueData}
          onChange={onHandleChanceSelect}
          MenuProps={MenuProps}
        >
          {
            defaultOption.length === 0 ? 
            <MenuItem disabled> No data </MenuItem>
            :
            defaultOption.map(op =>{
              return <MenuItem value={op.value} key={op.value}> {op.label} </MenuItem>
            })
          }
        </SelectMui>

        <FormHelperText children={objectDefaultData.messageError} className='core-helper-select-text'/>
    </CssSelect>

  )
}

export default Select;