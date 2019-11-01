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
        styles['navbar-theme-transparent']
      )}
    >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#" className={styles.logo}>
            <img src="flight-pop.svg" />
            FlightPop
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}
