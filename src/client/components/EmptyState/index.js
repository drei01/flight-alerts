import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from './style.less';

const PLACES = [
  'boston.svg',
  'chicago.svg',
  'chichen_itza.svg',
  'christ_the_redeemer.svg',
  'colosseum_roma.svg',
  'dallas.svg',
  'houston.svg',
  'los_angeles.svg',
  'machu_pichu.svg',
  'new_york.svg',
  'peak_mountain_1.svg',
  'peak_mountain_2.svg',
  'peak_mountain_3.svg',
  'petra.svg',
  'philadelphia.svg',
  'san_francisco.svg',
  'seattle.svg',
  'taj_mahal.svg',
  'the_great_pyramid_giza.svg',
  'the_great_wall.svg',
  'washington_dc.svg'
];

const getRandomPlace = () => {
  return 'places/' + PLACES[Math.floor(Math.random() * (PLACES.length - 1))];
};

export default ({title, children}) => {
  return (
    <div>
      <Row className="center-block">
        <Col xs={6} xsOffset={3}>
          <img src={getRandomPlace()} className="img-responsive" />
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          {title && <h2 className={styles.title}>{title}</h2>}
          <span className={styles.content}>{children}</span>
        </Col>
      </Row>
    </div>
  );
};
