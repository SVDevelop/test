import React from 'react';
import { Box, Typography } from '@mui/material';
import Ship from 'components/Ship/Ship';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import clsx from 'clsx';
import styles from './style.module.scss'

const ShipsColumn: React.FC = () => {
    return (
        <>
            <Typography component='h2' variant='h2' className={clsx(styles.title)}>Explore the space</Typography>
            <Box sx={{}} className={clsx(styles['wrap'])}>
                <Box >
                <Typography component='h3' variant='h6' className={clsx(styles.title)} >PAST LAUNCH</Typography>
                <Box sx={{}} className={clsx(styles['wrap__place'])} >
                    <Ship />
                </Box>
                </Box>
                <Box >
                <Typography component='h3' variant='h6' className={clsx(styles.title)} >LAUNCHES</Typography>

                <Box sx={{}} className={clsx(styles['wrap__place'])} > place 2 </Box></Box>
                <Box >
                <Typography component='h3' variant='h6' className={clsx(styles.title)} >MY LAUNCHES</Typography>

                <Box sx={{}} className={clsx(styles['wrap__place'])} > place 3 </Box>
                </Box>
            </Box>
        </>
    );
};

export default ShipsColumn;