import react from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import Blogpage from './pages/Blogpage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './componets/Layout';
import Singlepage from './pages/Singlepage';

function App() {
  return (
    <>
      {/* <header>
        <a href='/'>home</a>
        <a href='/posts'>blog</a>
        <a href='/about'>about</a>
        <br />
        <Link to='/'>home</Link>
        <Link to='/posts'>blog</Link>
        <Link to='about'>about</Link>
      </header> */}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='postss/:id/:title' element={<Singlepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
