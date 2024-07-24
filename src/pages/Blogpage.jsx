import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogpage = () => {
  const [post, sePosts] = useState[[]];

  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then((res) => res.json())
      .then((data) => sePosts(data));
  }, []);
  return (
    <div>
      {postMessage.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}></Link>
      ))}
    </div>
  );
};

export default Blogpage;
