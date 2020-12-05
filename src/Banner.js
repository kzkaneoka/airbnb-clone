import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <h1>Search</h1>}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined" // https://material-ui.com/api/button/
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch out your imagination</h1>
        <h5>
          Plan a different kind of getway to uncover the hidden gemes near you
          <Button onClick={() => history.push('/search')} variant="outlined">
            Explore Nearby
          </Button>
        </h5>
      </div>
    </div>
  );
}

export default Banner;
