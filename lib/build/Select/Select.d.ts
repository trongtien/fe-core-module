import { FC } from 'react';
export interface OptionSelect {
    label: string;
    value: string;
}
export interface SelectProps {
    className?: string;
    id?: string;
    message?: string;
    label?: string;
    value?: string | number;
    placeholder?: string;
    onChangeTimeOut?(val: string): void;
    onChange?(val: string): void;
    fullWidth?: boolean;
    options?: OptionSelect[];
    disabled?: boolean;
}
declare const Select: FC<SelectProps>;
export default Select;
