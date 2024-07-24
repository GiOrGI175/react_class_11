import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <a href='/'>home</a>
        <a href='/posts'>blog</a>
        <a href='/about'>about</a>
        <br />
        <Link to='/'>home</Link>
        <Link to='/posts'>blog</Link>
        <Link to='about'>about</Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
