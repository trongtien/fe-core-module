import { FC, MouseEventHandler } from 'react';
export interface IButtonProps {
    text?: string;
    className?: string;
    primary?: boolean;
    disabled?: boolean;
    loading?: boolean;
    size?: 'small' | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: FC<IButtonProps>;
export default Button;
