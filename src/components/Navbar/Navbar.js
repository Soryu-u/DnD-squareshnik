import React from 'react';
import poster from '../../images/poster.png';
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar () {
  const isAuth = useSelector(checkIsAuth);
  return (
    <div className={styles.header_container}>
        <div className={styles.navbar}>
          {
            isAuth ?
            <>
              <div className={styles.li_item}>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.li_text)} to='/characters'>
                  Мої персонажі
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.li_text)} to='/tables'>
                  Ігрові кімнати
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.li_text)} to='/game'>
                  Без назви
                </NavLink>
              </div>
            </> : <></>
          }
        </div>
    </div>
  )
}
