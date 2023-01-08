import React from 'react';
import poster from '../../images/poster.png';
import styles from './Navbar.module.css';


export default function Navbar () {
  return (
    <div>
        <img className={styles.poster} src={poster} alt='poster' />
        <ul className={styles.navbar}>
        </ul>
    </div>
  )
}
