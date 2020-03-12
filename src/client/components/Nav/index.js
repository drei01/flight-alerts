import c from 'classnames';
import React from 'react';
import {DropdownButton, MenuItem, Navbar} from 'react-bootstrap';
import styles from '../../style.less';
import {getCurrencySymbol} from '../../currency';

const CURRENCIES = ['GBP', 'EUR', 'USD'];

const displayFormat = (currency) => `${getCurrencySymbol(currency)} ${currency}`;

export default function({currency, onChangeCurrency}) {
  return (
    <Navbar
      className={c(
        styles['navbar-inverse'],
        styles['navbar-theme'],
        styles['navbar-theme-abs'],
        styles['navbar-theme-transparent']
      )}
    >
      <Navbar.Header className={styles['navbar-fullwidth']}>
        <Navbar.Brand>
          <a href="#" className={styles.logo}>
            <img src="flight-pop.svg" />
            FlightPop
          </a>
        </Navbar.Brand>
        <Navbar.Form pullRight>
          <DropdownButton pullRight title={displayFormat(currency)} id="dropdown-menu-align-right">
            {CURRENCIES.map((currency) => (
              <MenuItem key={currency} eventKey={currency} onClick={() => onChangeCurrency(currency)}>
                {displayFormat(currency)}
              </MenuItem>
            ))}
          </DropdownButton>
        </Navbar.Form>
      </Navbar.Header>
    </Navbar>
  );
}
