import { SxProps, Theme } from "@mui/system";
import { FC, PropsWithChildren } from "react";
export declare type SxBase = SxProps<Theme>;
export declare type FCBase<P = {}> = FC<PropsWithChildren<P>>;
export interface BaseComponentProps {
    id?: string;
    className?: string;
    sx?: SxBase;
}
