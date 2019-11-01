import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import styles from '../../../style.less';

export default class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {price: props.price};
  }

  render() {
    const {currencySymbol, onChange} = this.props;
    const {price} = this.state;
    return (
      <div>
        <h5 className={styles['theme-search-results-sidebar-section-title']}>Max Price</h5>
        <div className={styles['theme-search-results-sidebar-section-price']}>
          <ReactBootstrapSlider
            value={price}
            min={1}
            max={3000}
            tooltip="hide"
            change={({target: {value}}) => {
              this.setState({price: value});
            }}
            slideStop={({target: {value}}) => {
              onChange(value);
            }}
          />
          <span className={styles['theme-search-results-sidebar-section-checkbox-list-amount']}>
            {currencySymbol}
            {price}
          </span>
        </div>
      </div>
    );
  }
}
