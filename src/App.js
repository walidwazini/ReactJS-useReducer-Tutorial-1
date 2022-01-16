import React, { useContext } from 'react';
import './App.css'

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Card from './components/UI/Card/Card';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment >
      {/* <MainHeader onLogout={logoutHandler} /> */}
      <MainHeader />
      <main className='bg-dark' >
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
