import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/container';
import appFirebase from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useEffect, useState } from 'react';
import MainContent from './components/container/MainContent';
import { Login } from './components/login/Login';
import { Container } from './components/documentsBox/Container'
import Videos from './components/documentsBox/Videos';

const auth = getAuth(appFirebase);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (fireBaseUser) => {
      if (fireBaseUser) {
        setUser(fireBaseUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
      <>
        <div className="relative z-0">
          <Navbar userMail={user ? user.email : null} />         

          <Routes>
            <Route
              path="/documents"
              element={
                user ? (
                  <Container userMail={user.email}/> 
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />

            <Route
              path="/videos"
              element={
                user ? (
                  <Videos userMail={user.email}/> 
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />          

            <Route
              path="/register"
              element={
                user && user.email === 'auditoriaycalidadcic@gmail.com' ? (
                  <Login setUser={setUser} isRegister={true} />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
        
          <Route 
            path="/login" element={<Login setUser={setUser} />}            
          />

            <Route
              path="/"
              element={
                <MainContent/>
              }
            />

          </Routes>
        </div>
        </>
      </BrowserRouter>
    </>
  );
};

export default App;