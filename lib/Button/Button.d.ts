import { PropsWithChildren, FC, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/system';
export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    sx?: SxProps<Theme>;
    onClick?(): void;
    variant?: 'outlined' | 'contained';
    endIcon?: ReactNode;
    startIcon?: ReactNode;
}
export interface ButtonComponent extends PropsWithChildren<ButtonProps> {
}
declare const Button: FC<ButtonComponent>;
export default Button;
