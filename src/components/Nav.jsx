import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
// import { Link } from 'rneact-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/content', text: 'Index' },
];
const Nav = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map(items => (
          <li key={items.to}>
            {' '}
            <LinkStyled
              to={items.to}
              className={location.pathname === items.to ? 'active' : ''}
            >
              Go to {items.text}
            </LinkStyled>{' '}
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Nav;
