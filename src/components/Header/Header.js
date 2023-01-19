import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/favicon.png';
import menu from '../../images/menu.png';
import log_out from '../../images/log-out.png';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logout } from '../../redux/features/auth/authSlice';
import useComponentVisible from '../../utils/useComponentVisible';

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
            {showMenuList && (
                <MenuList setShowMenuList={setShowMenuList} user={user} />
            )}

            <div className={styles.right_bar}>
                <UserLogin user={user} />
            </div>
        </div>
    );
};

function MenuList({ user, setShowMenuList }) {
    const { ref } = useComponentVisible(setShowMenuList);

    return (
        <div ref={ref} className={styles.menu_list}>
            <UserLogin setShowMenuList={setShowMenuList} user={user} />
        </div>
    );
}

function UserLogin({ user, setShowMenuList }) {
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
                    <Link className={styles.link} onClick={() => setShowMenuList(false)} to="/profile">
                        {user.username}
                    </Link>
                    <div className={styles.link} onClick={logoutHandler}>
                        Вийти
                    </div>
                </>
            ) : (
                <>
                    <Link className={styles.link} onClick={() => setShowMenuList(false)} to="/sign_in">
                        Вхід
                    </Link>
                    <Link className={styles.link} onClick={() => setShowMenuList(false)} to="/register">
                        Реєстрація
                    </Link>
                </>
            )}
        </>
    );
}
