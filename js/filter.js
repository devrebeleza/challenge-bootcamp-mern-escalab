// variables
const URL = 'https://restcountries.com';
const VERSION = 'v3.1';
const FILTERS = '?fields=name,capital,region,population,flags';

const countries = document.getElementById('countries');

document.addEventListener('DOMContentLoaded', (ev) => {
	getDataFromCountry();
});

const getDataFromCountry = async () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const countrySearch = urlParams.get('name');

	try {
		let res = await fetch(`${URL}/${VERSION}/name/${countrySearch}${FILTERS}`);
		if (res != null) {
			const data = await res.json();
			createCardsCountries(data);
		} else {
			alert('No results!');
		}
	} catch (error) {
		createCardsCountries([]);
	}
};

const createCardsCountries = (data) => {
	let countrie = '';
	data.forEach((item) => {
		countrie += `<article class="card"> 
        <img src=${item.flags.png} alt="flag-${item.name.official}" class="img-fluid" />       
        <div class="card-content">
            <h3>${item.name.official}</h3>
            <p>
                <b>Region</b>
                ${item.region}
            </p>
            <p>
                <b>Capital</b>
                ${item.capital}
            </p>
            <p>
            <b>Population</b>
            ${item.population}
        </p>
        </div>
    </article>`;
	});
	countries.innerHTML = countrie;
};
