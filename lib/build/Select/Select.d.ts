import { FC } from 'react';
import { SxProps, Theme } from '@mui/system';
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
    sx?: SxProps<Theme>;
}
declare const Select: FC<SelectProps>;
export default Select;
