import { FC, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/system';
import AppBarMui from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';


export interface AppBarProps{
    childrenLeft?: ReactNode;
    childrenRight?: ReactNode;
    sxAppBar?:SxProps<Theme>;
    sxChildrenRight?:SxProps<Theme>;
}

const AppBar: FC<AppBarProps> = props => {

    const { childrenLeft, childrenRight, sxChildrenRight={}, sxAppBar={} } = props;

    return (
        <AppBarMui className='core-app-bar' sx={sxAppBar}>
            <Toolbar>
                {childrenLeft}

                <Box sx={{ flexGrow: 1 }} />
                
                <Box sx={{ display: "flex", ...sxChildrenRight}}>
                    {childrenRight}
                </Box>
            </Toolbar>
        </AppBarMui>
    )
}

export default AppBar;