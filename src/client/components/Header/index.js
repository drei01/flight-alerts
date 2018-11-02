import React from 'react';
import styles from '../../style.less';
import c from 'classnames';

export default function() {
  return (
    <div className={c(styles['theme-hero-area'], styles.front)}>
      <div className={styles['theme-hero-area-bg-wrap']}>
        <div
          className={c(styles['theme-hero-area-bg'], styles['theme-hero-area-bg-blur'])}
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d424e0c724d80f5f3b23c02201b8648&auto=format&fit=crop&w=3298&q=80)'
          }}
        />
        <div className={c(styles['theme-hero-area-mask'], styles['theme-hero-area-mask-half'])} />
      </div>
      <div className={styles['theme-hero-area-body']}>
        <div className="container">
          <div className={c(styles['_pb-50'], styles['_pt-100'], styles['_pv-mob-50'])}>
            <div className={c(styles['theme-search-area'], styles['_mob-h'], styles['theme-search-area-white'])}>
              <div className={c(styles['theme-search-area-header'], styles['_mb-20'])}>
                <h1 className={c(styles['theme-search-area-title'], styles['theme-search-area-title-sm'])}>
                  Find cheap flights to anywhere
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
