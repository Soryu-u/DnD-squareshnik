import styles from './App.module.css';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './components/Layout/Layout';
import { Registration } from './pages/Registration/Registration';
import { Login } from './pages/Login/Login';
import { HomePage } from './pages/HomePage/HomePage'
import { userInfo, getUser } from './redux/features/auth/authSlice';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { Characters } from './pages/Characters/Characters';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(userInfo);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  
  return (
    <>
      {
        user !== null ?
        <div className={styles.App}>
          <Routes>
            <Route element={ <Layout user={user}/> }>
              <Route path="/" element={ <HomePage /> }/>
              <Route path="/profile" element={ <UserProfile /> }/>  
              <Route path="/characters" element={ <Characters /> }/>
              <Route path="/tables" element={ <div>Ігрові столи</div> }/>
              <Route path="/game" element={ <div>game</div> }/>
            </Route>
            <Route path="/register" element={ <Registration /> }/>
            <Route path="/sign_in" element={ <Login /> }/>
          </Routes>
        </div> : 
        <>Loading</>
      }
    </>
    
  );
}
