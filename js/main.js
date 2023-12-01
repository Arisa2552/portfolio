const body = document.body;
const burgerMenu = document.querySelector('#burger-menu');
const overlay = document.querySelector('#menu');

burgerMenu.addEventListener('click', function () {
	if (burgerMenu.classList.contains('close')) {
		burgerMenu.classList.remove('close');
		overlay.classList.remove('overlay', 'open');
		body.classList.remove('bodyoverlow');
	} else {
		burgerMenu.classList.add('close');
		overlay.classList.add('overlay', 'open');
		body.classList.add('bodyoverlow');
	}
});
