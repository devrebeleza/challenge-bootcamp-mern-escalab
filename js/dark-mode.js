const btnDark = document.getElementById('btn-dark-mode');

btnDark.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');

	if (document.body.className === 'dark-mode') {
		localStorage.setItem('dark-mode-api-country', 'Y');
		btnDark.innerHTML = `<i class="fa-regular fa-sun"></i>`;
	} else {
		localStorage.removeItem('dark-mode-api-country');
		btnDark.innerHTML = `<i class="fa-regular fa-moon"></i>`;
	}
});
