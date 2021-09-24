import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountryDetail = props => {

  const [country, setCountry] = useState(null);

  const getCountryData = () => {
    // get the data for that country form the server
    const countryCode = props.match.params.id
    axios.get(`/countries/${countryCode}`)
      .then(response => {
        console.log(response.data)
        setCountry(response.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCountryData();
  }, [props])




  // const getCountryByCode = cca3 => countries.find(el => el.cca3 === cca3);

  // const country = { ...getCountryByCode(props.match.params.id) };

  // console.log(country);

  // const borders = country.borders.map(cca3 => getCountryByCode(cca3));
  // console.log(country);

  // if country is null -> render sth else that the structure below
  if (!country) {
    return <></>
  }
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          {country.borders.length > 0 && (
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map(country => {
                    return (
                      <li key={country.cca3}>
                        <Link to={`/${country.cca3}`}>
                          {country.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
