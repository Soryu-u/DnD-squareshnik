import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/favicon.png';
import menu from '../../images/menu.png';
import log_out from '../../images/log-out.png';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logout } from '../../redux/features/auth/authSlice';

export const Header = ({ user }) => {
    const [showMenuList, setShowMenuList] = useState(false);

    return (
        <div className={styles.header}>
            <Link className={styles.logo_bar} to="/">
                <img className={styles.logo} src={logo} alt="" />
                <div className={styles.logo_text}>DnD шпаківня</div>
            </Link>
            <img
                className={styles.hamburger}
                onClick={() => setShowMenuList(!showMenuList)}
                src={menu}
                alt=""
            />
            {showMenuList && <MenuList user={user} />}

            <div className={styles.right_bar}>
                <UserLogin user={user} />
            </div>
        </div>
    );
};

function MenuList({ user }) {
    return (
        <div className={styles.menu_list}>
            <UserLogin user={user} />
        </div>
    );
}

function UserLogin({ user }) {
    const isAuth = useSelector(checkIsAuth);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout);
        window.localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <>
            {isAuth ? (
                <>
                    <Link className={styles.link} to="/profile">
                        {user.username}
                    </Link>
                    <img
                        className={styles.log_out}
                        onClick={logoutHandler}
                        src={log_out}
                        alt="Вийти"
                    />
                </>
            ) : (
                <>
                    <Link className={styles.link} to="/sign_in">
                        Вхід
                    </Link>
                    <Link className={styles.link} to="/register">
                        Реєстрація
                    </Link>
                </>
            )}
        </>
    );
}
