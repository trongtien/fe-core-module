import { BaseComponentProps, FCBase } from "../Types/baseComponents";

export interface OptionSelect{
    label: string;
    value: string;
  }
  
export interface SelectProps extends BaseComponentProps{
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

export interface IObjectSelect{
    valueData?: string | number;
    messageError: string;
}

export interface SelectComponent extends FCBase<SelectProps>{};