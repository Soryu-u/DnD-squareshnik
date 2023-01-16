import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import styles from './Layout.module.css'

export const Layout = (props) => {
  return (
    <>
      <Header user={props.user}/>
      <div className={styles.main}>
        <Outlet />
      </div>
    </>
  )
}
