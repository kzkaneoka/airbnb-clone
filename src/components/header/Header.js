import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="logo"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <IconButton>
          <LanguageIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
