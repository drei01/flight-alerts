import React from 'react';
import {Navbar} from 'react-bootstrap';
import styles from '../../style.less';
import c from 'classnames';

export default function() {
  return (
    <Navbar
      className={c(
        styles['navbar-inverse'],
        styles['navbar-theme'],
        styles['navbar-theme-abs'],
        styles['navbar-theme-transparent'],
        styles['navbar-theme-border']
      )}
    >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Fly Cheap</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}
