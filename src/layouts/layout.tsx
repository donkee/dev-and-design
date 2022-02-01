import { Link } from 'gatsby';
import React from 'react';
import Konami from 'react-konami-code';
import konami from '../tools/loaders/konami';
import './layout.scss';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
        </nav>
      </header>
      <Konami action={konami.action} timeout={konami.timeout}></Konami>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
