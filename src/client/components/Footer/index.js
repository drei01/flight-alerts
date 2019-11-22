import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from './style.less';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Row>
        <Col md={3}>
          <h4 />
          <small>© 2019 Codefish Apps Ltd, All rights reserved</small>
        </Col>
        <Col md={4}>
          <h4 />
          <Col md={6} />
          <Col md={6} />
        </Col>
        <Col md={2}>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://www.twitter.com/helloflightpop">Twitter</a>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          Powered by <img src="/kiwi-logo.svg" width="100" />
        </Col>
      </Row>
    </footer>
  );
}
