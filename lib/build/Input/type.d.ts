import { HTMLInputTypeAttribute } from "react";
import { BaseComponentProps } from "../Types/baseComponents";
export interface InputProps extends BaseComponentProps {
    message?: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    placeholder?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    onChangeTimeOut?(val: string): void;
    onChange?(val: string): void;
}
export interface IObjectInput {
    valueData?: string | number;
    messageError?: string;
}
