import { FC, HTMLInputTypeAttribute } from 'react';
export interface InputProps {
    className?: string;
    id?: string;
    message?: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    onChange?(): void;
}
declare const Input: FC<InputProps>;
export default Input;
