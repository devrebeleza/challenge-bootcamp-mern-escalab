// variables
const URL = 'https://restcountries.com';
const VERSION = 'v3.1';
const FILTERS = '?fields=name,capital,region,population,flags';

const FILTER_COUNTRY = '?fields=name,capital,region,population,flags,subregion,languages,timezones,maps';

document.addEventListener('DOMContentLoaded', (ev) => {
	const darkMode = localStorage.getItem('dark-mode-api-country');
	if (darkMode === 'Y') {
		document.body.className = 'dark-mode';
	}
});
