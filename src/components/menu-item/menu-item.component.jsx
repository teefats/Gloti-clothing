import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// step 5 create menuitem component that returns the menu item component that had hitherto been created in the homepage component

//In order to dynamically generate a title we destructure the title using jsx instead of using props.title or hard coding the tile we simply include {title}

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);