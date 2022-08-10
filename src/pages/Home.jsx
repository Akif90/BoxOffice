import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      This is Home
      <Link exact to="/index">
        Go to Index Page
      </Link>
    </div>
  );
};

export default Home;
