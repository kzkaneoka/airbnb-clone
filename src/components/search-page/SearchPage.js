import React, { useContext, useEffect } from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from '../search-result/SearchResult';
import AirbnbContext from '../../context/airbnb/airbnbContext';

function SearchPage() {
  const airbnbContext = useContext(AirbnbContext);
  const { airbnbs, getAirbnbs } = airbnbContext;

  useEffect(() => {
    getAirbnbs();
  }, []);

  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 statys . 26 august to 30 autst .2 guest</p>
        <h1>Statys neaby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of places</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>

      {airbnbs.map((airbnb) => (
        <SearchResult key={airbnb.id} airbnb={airbnb} />
      ))}
    </div>
  );
}

export default SearchPage;
