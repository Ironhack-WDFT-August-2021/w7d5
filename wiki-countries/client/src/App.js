import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import axios from 'axios';

const App = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // get the countries from the server
    axios.get('/countries')
      .then(response => {
        // set the state of countries
        // console.log(response.data);
        setCountries(response.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className='App' >
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountryList countries={countries} />
          <Route exact path='/:id' component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
