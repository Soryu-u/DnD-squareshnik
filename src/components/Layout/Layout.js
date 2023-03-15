import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { Header } from '../Header/Header';
import { DiceWidget } from '../Widgets/DiceWidget/DiceWidget';
import styles from './Layout.module.css';
import { useSelector } from 'react-redux';
import { useNotification } from '../Widgets/DiceWidget/Notification';
import Navbar from '../Navbar/Navbar';
import background from '../../images/page_background.png';

export const Layout = (props) => {
    const isAuth = useSelector(checkIsAuth);
    const notification = useNotification();
    const [dices, setDices] = useState();

    function submitRoll(result) {
        notification.open(result);
    }

    return (
        <>
            <Header user={props.user} />
            <Navbar />
            <div className={styles.main}>
                <div className={styles.blur}></div>
                <Outlet />
                <DiceWidget submitRoll={submitRoll} />
            </div>
        </>
    );
};
