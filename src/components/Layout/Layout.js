import React from 'react';
import { Outlet } from 'react-router-dom';
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { Header } from '../Header/Header';
import { DiceWidget } from '../Widgets/DiceWidget/DiceWidget';
import styles from './Layout.module.css';
import { useSelector } from 'react-redux';

export const Layout = (props) => {
    const isAuth = useSelector(checkIsAuth);

    return (
        <>
            <Header user={props.user} />
            <div className={styles.main}>
                <Outlet />
                {/* { isAuth && <DiceWidget /> } */}
                <DiceWidget />
            </div>
        </>
    );
};
