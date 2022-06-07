import { ReactNode } from "react";
import { BaseComponentProps, FCBase } from "../Types/baseComponents";


export interface ButtonProps extends BaseComponentProps{
    disabled?: boolean;
    onClick?(): void;
    variant?: 'outlined' | 'contained'
    endIcon?: ReactNode;
    startIcon?: ReactNode;
}


export interface ButtonComponent extends FCBase<ButtonProps>{}
