const form = document.getElementById('form-search');
const input = document.getElementById('input-search');
const selectRegion = document.getElementById('filter-region');
let countrySearch = '';
let regionSearch = '';

/**  */
form.addEventListener('submit', (e) => {
	e.preventDefault();
	return false;
});

input.addEventListener('keyup', async (e) => {
	e.preventDefault();
	countrySearch = input.value;
	getDataFromCountry();
});

/**  */

selectRegion.addEventListener('change', async (e) => {
	e.preventDefault();
	const region = selectRegion.options[selectRegion.selectedIndex];
	regionSearch = region.value;

	if (regionSearch != '') {
		getDataFromRegion();
	} else {
		getDataFromCountry();
	}
});

/** */

const getDataFromCountry = async () => {
	try {
		let res = await fetch(`${URL}/${VERSION}/name/${countrySearch}${FILTERS}`);
		if (res != null) {
			const data = await res.json();
			if (regionSearch != '') {
				let dataFilter = data.filter((item) => {
					if (item.region.indexOf(regionSearch) !== -1) {
						return item;
					}
				});
				createCardsCountries(dataFilter);
			} else {
				createCardsCountries(data);
			}
		} else {
			alert('No results!');
		}
	} catch (error) {
		createCardsCountries([]);
	}
};

/** */
const getDataFromRegion = async () => {
	try {
		let res = await fetch(`${URL}/${VERSION}/region/${regionSearch}${FILTERS}`);
		if (res != null) {
			const data = await res.json();
			if (countrySearch != '') {
				let dataFilter = data.filter((item) => {
					let nameOfficial = item.name.official.toLowerCase();
					if (nameOfficial.indexOf(countrySearch) !== -1) {
						return item;
					}
				});
				createCardsCountries(dataFilter);
			} else {
				createCardsCountries(data);
			}
		}
	} catch (error) {
		createCardsCountries([]);
	}
};
