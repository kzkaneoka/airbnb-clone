import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import SearchPage from '../search-page/SearchPage';
import Footer from '../footer/Footer';

import AirbnbState from '../../context/airbnb/AirbnbState';

const App = () => {
  return (
    <div className='app'>
      <AirbnbState>
        <Router>
          <Header />
          <Switch>
            <Route path='/search'>
              <SearchPage />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AirbnbState>
    </div>
  );
};

export default App;
