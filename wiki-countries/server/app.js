const express = require('express');
const app = express();

const countries = require('./countries.json');

// console.log(countries);

app.get('/countries', (req, res) => {
	res.json(countries);
});

function getCountryByCode(cca3) {
	const country = countries.find(el => el.cca3 === cca3)
	return country
};

app.get('/countries/:countryCode', (req, res) => {
	const country = { ...getCountryByCode(req.params.countryCode) };
	country.borders = country.borders.map(cca3 => getCountryByCode(cca3));
	console.log(country)
	res.json(country);
})

app.listen(5555, () => {
	console.log('Server listening on port 5555');
})