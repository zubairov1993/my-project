import React from 'react';

import './app-header.scss';

const AppHeader = ({liked, allPosts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Vadim Zubairov</h1>
  <h2>{allPosts} записей, из них понравилось {liked}</h2>
    </div>
  )
}

export default AppHeader;