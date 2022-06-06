import { FC, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/system';
export interface AppBarProps {
    childrenLeft?: ReactNode;
    childrenRight?: ReactNode;
    sxAppBar?: SxProps<Theme>;
    sxChildrenRight?: SxProps<Theme>;
}
declare const AppBar: FC<AppBarProps>;
export default AppBar;
