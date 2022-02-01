import { Link } from 'gatsby';
import React from 'react';
import './layout.scss';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
