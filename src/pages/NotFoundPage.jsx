import React from 'react';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
  return (
    <div>
      <p>404 error Page not found</p>
      <Link to='/'> go home</Link>
    </div>
  );
};

export default Notfoundpage;
