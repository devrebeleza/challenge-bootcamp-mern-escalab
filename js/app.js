const countries = document.getElementById('countries');

document.addEventListener('DOMContentLoaded', (ev) => {
	getData();
});

const getData = async () => {
	try {
		let res = await fetch(`${URL}/${VERSION}/all${FILTERS}`);
		if (res != null) {
			const data = await res.json();
			createCardsCountries(data);
		} else {
			alert('No results!');
		}
	} catch (error) {
		console.log('Error fetching!!!');
	}
};

const createCardsCountries = (data) => {
	let countrie = '';
	data.forEach((item) => {
		countrie += `<article class="card">
        <a href="country.html?name=${item.name.official}">
        <img src=${item.flags.png} alt="flag-${item.name.official}" class="img-fluid" />
        </a>
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
