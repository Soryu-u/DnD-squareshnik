import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import { Main } from './components/Main/Main';
import { Registration } from './pages/Registration/Registration';
import { Login } from './pages/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/features/auth/authSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={
          <div>
            <Header/>
            <Main/>
          </div>
        }>
          <Route path="/" element={ <div>Home page</div> }/>
        </Route>
        <Route path="/register" element={ <Registration /> }/>
        <Route path="/sign_in" element={ <Login /> }/>
      </Routes>
    </div>
  );
}
