import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import styles from './NavbarLayout.module.css'

export const NavbarLayout = () => {
  return (
    <div className={styles.main}>
        <Navbar/>
        <Outlet />
    </div>
  )
}
