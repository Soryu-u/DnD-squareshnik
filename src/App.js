import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import { Main } from './components/Main/Main';
import { Registration } from './pages/Registration/Registration';
import { Login } from './pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { userInfo, getUser } from './redux/features/auth/authSlice';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { NavbarLayout } from './components/Layouts/NavbarLayout/NavbarLayout';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(userInfo);

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);
  
  return (
    <>
      {
        user  !== null ?
        <div className={styles.App}>
          <Routes>
            <Route path='/' element={
              <div>
                <Header user={user}/>
                <NavbarLayout />
              </div>
            }>
              <Route path="/" element={ <div>Home page</div> }/>
            </Route>
          <Route path="/register" element={ <Registration /> }/>
          <Route path="/sign_in" element={ <Login /> }/>
          <Route path="/profile" element={ 
            <div>
            <Header user={user}/>
            <Main />
            </div> 
          }>
            <Route path="/profile" element={ <UserProfile /> }/>           
          </Route>
        </Routes>
      </div> : 
      <></>
      }
    </>
    
  );
}
