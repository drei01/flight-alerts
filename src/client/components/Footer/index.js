import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from './style.less';
import c from 'classnames';

export default function Footer() {
  return (
    <footer className={c(styles.footer, 'navbar-fixed-bottom')}>
      <Col md={8} mdOffset={2}>
        <Row>
          <Col md={3}>
            <h4 />
            <small>
              © 2019 Codefish Apps Ltd, <br /> All rights reserved
            </small>
          </Col>
          <Col md={4}>
            <h4 />
            <Col md={6} />
            <Col md={6} />
          </Col>
          <Col md={2}>
            <h4>Follow Us</h4>
            <ul className={styles.social}>
              <li className={styles.twitter}>
                <a href="https://www.twitter.com/helloflightpop">Twitter</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            Powered by <img src="/kiwi-logo.svg" width="100" />
          </Col>
        </Row>
      </Col>
    </footer>
  );
}
