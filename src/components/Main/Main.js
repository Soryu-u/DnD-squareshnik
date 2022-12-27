import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Main.module.css'
import Navbar from '../Navbar/Navbar.js'

export const Main = () => {
  return (
    <div className={styles.main}>
        <Navbar/>
        <Outlet />
    </div>
  )
}
