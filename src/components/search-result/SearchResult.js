import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({
  airbnb: {
    images,
    isSuperhost,
    kind,
    lat,
    lng,
    name,
    price,
    rating,
    reviewsCount,
  },
}) {
  const img = images[0]['picture'];
  return (
    <div className='searchResult'>
      <img src={img} alt='' />
      <FavoriteBorderIcon className='searchResult__heart' />
      <div className='searchResult__info'>
        <div className='searchResult__infoTop'>
          <h3>{name}</h3>
          <p>_____</p>
          <p>some info here like number of guests, number of beds</p>
        </div>
        <div className='searchResult__infoBottom'>
          <div className='searchResult__stars'>
            <StarIcon className='searchResult__star' />
            <p>
              <strong>{rating}</strong> ({reviewsCount})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
