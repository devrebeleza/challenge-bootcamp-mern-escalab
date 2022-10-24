const countries = document.getElementById('countries');
const nameCountrie = document.getElementById('name-country');

document.addEventListener('DOMContentLoaded', (ev) => {
	getDataFromCountry();
});

const getDataFromCountry = async () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const countrySearch = urlParams.get('name');
	try {
		let res = await fetch(`${URL}/${VERSION}/name/${countrySearch}`);
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
	let country = '';
	data.forEach((item) => {
		nameCountrie.innerHTML = `${item.name.official}`;

		let languages = '';
		for (let clave in item.languages) {
			languages += item.languages[clave] + '; ';
		}

		country += `<article class="card-country"> 
        <img src=${item.flags.png} alt="flag-${item.name.official}" class="img-fluid" />       
        <h3 class="card-name my-2">${item.name.common}</h3>
					<div class="card-columns">
						<div class="card-content">
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
						<div class="card-content">
							<p>
								<b>Sub Region</b>
								${item.subregion}
							</p>
							<p>
								<b>Languages</b>
								${languages}
							</p>
							<p>
								<b>Time Zones</b>
								<div class='time-zones'>
								${item.timezones}
								</div>
							</p>
						</div>
					</div>
					<div class="card-columns">
						<ul class="card-content">
							<li> <a href=${item.maps.googleMaps}>Google Maps</a> </li>
							<li><a href="${item.maps.openStreetMaps}">Street Maps</a> </li>
						</ul>
					</div>
    </article>`;
	});
	countries.innerHTML = country;
};
