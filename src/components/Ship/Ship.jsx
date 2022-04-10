import React from 'react'
import { useSelector } from 'react-redux'
import { Skeleton } from '@material-ui/lab'


import clsx from 'clsx'
import styles from './Ship.module.scss'

const Ship = () => {
    const ships = useSelector(state => state.launches)
    return (
        <div className={clsx(styles.ships)}>
            {ships ? ships.map(({name}) => (
                <div className={clsx(styles.ship)}>
                    {name}
                </div>
            )) : (
                <>
                    <Skeleton variant="rect" width={210} height={118}  animation="wave" />
                </>
            )
            
            }
        </div>
    );
};

export default Ship;