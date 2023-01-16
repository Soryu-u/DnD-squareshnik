import React from 'react';
import poster from '../../images/poster.png';
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { Link } from 'react-router-dom';


export default function Navbar () {
  const isAuth = useSelector(checkIsAuth);
  return (
    <div className={styles.header_container}>
        <img className={styles.poster} src={poster} alt='poster' />
        <div className={styles.navbar}>
          {
            isAuth ?
            <>
              <div className={styles.li_item}>
                <Link className={styles.li_text} to='/characters'>
                  Мої персонажі
                </Link>
              </div>
            </> : <></>
          }
        </div>
    </div>
  )
}
