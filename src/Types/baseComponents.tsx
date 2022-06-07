import { SxProps, Theme } from "@mui/system";
import { FC, PropsWithChildren } from "react";


export type SxBase = SxProps<Theme>;


export type FCBase<P = {}> = FC<PropsWithChildren<P>>;


export interface BaseComponentProps{
    id?: string;
    className?: string;
    sx?: SxBase;
}
