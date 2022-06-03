import { FC, MouseEventHandler } from 'react';
import ButtonMui from '@mui/material/Button';

export interface IButtonProps{
    text?: string;
    className?: string;
    primary?: boolean;
    disabled?: boolean;
    loading?: boolean;
    size?: 'small' | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


const Button: FC<IButtonProps> = props => {

    const { text, className} = props;

    return (
        <ButtonMui className={className} > {text} </ButtonMui>
    )
}


export default Button;