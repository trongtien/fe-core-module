import React, { HTMLInputTypeAttribute } from 'react';
export interface InputProps {
    className?: string;
    id?: string;
    message?: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    placeholder?: string;
    onChangeTimeOut?(val: string): void;
    onChange?(val: string): void;
    fullWidth?: boolean;
    disabled?: boolean;
}
declare const _default: React.NamedExoticComponent<InputProps>;
export default _default;
