import react from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import Blogpage from './pages/Blogpage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './componets/Layout';

function App() {
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

      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/' element={<Homepage />} />
        <Route path='posts' element={<Blogpage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='+' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
