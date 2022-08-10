import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/index', text: 'Index' },
];
const Nav = () => {
  return (
    <div>
      <ul>
        {LINKS.map(items => (
          <li key={items.to}>
            {' '}
            <Link to={items.to}>Go to {items.text}</Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
