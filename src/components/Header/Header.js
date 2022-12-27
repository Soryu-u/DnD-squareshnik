import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../images/favicon.png'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../../redux/features/auth/authSlice'

export const Header = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  console.log(isAuth);

  const logoutHandler = () => {
    dispatch(logout);
    window.localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div className={styles.header}>
      <Link className={[styles.logoText, styles.logo_bar].join(' ')} to='/'>
        <img className={styles.logo} src={logo} alt=''/>
        DnD шпаківня
      </Link>
      <div className={styles.right_bar}>
        {
          isAuth ? 
          <>
          <Link className={styles.logoText} to='/profile'>Профіль</Link>
          <Link className={styles.logoText} onClick={logoutHandler} to='#'>Вийти</Link>
          </>
          :
          <>
            <Link className={styles.logoText} to='/sign_in'>Вхід</Link>
            <Link className={styles.logoText} to='/register'>Реєстрація</Link>
          </> 
        }
      </div>
    </div>
  )
}
