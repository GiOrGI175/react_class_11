import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Singlepage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    console.log('go back');
  };

  console.log(useParams());

  const { id } = useParams();

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts${id}`;

    fetch(url)
      .then((ras) => ras.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      {post && (
        <>
          <button onChange={goBack}>gadadai ukan</button>
          <h1>{post.tittle}</h1>
          <p>{post.body}</p>
          <json>{post.id}</json>
          <Link to={`/posts/${Number(id) - 1}`}>nexts</Link>
          <Link to={`/posts/${Number(id) + 1}`}>nexts</Link>
        </>
      )}
    </div>
  );
};

export default Singlepage;
