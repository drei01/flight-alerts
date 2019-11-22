import React from 'react';
import styles from '../../style.less';

export default function({title, children}) {
  return (
    <div>
      <h5 className={styles['theme-search-results-sidebar-section-title']}>{title}</h5>
      {children}
    </div>
  );
}
