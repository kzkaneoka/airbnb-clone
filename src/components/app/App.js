import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import SearchPage from '../search/search-page/SearchPage';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className='app'>
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
    </div>
  );
}

export default App;
