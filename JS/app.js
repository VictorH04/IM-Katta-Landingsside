// Navbar
const navbarIcon = document.querySelector('.navbar-icon');
let navbar = document.querySelector('.navbar');
let nav = document.querySelector('.nav');
const navContent = document.getElementById('navContent');
// const active = doucmnet.querySelector('.active');
let display = navContent.classList.toggle('display');

const dropDownHome = document.getElementById('dropdown-home');
const dropDownAbout = document.getElementById('dropdown-about');
const dropDownProjects = document.getElementById('dropdown-projects');
const dropDownSchoolprojects = document.getElementById('dropdown-schoolprojects');
const dropDownContact = document.getElementById('dropdown-contact');

navbarIcon.classList.remove('active');

function toggleNav() {
	if (navbarIcon.classList.contains('active')) {
		closeNav();
	} else {
		openNav();
	}
	// openNav();
	// closeNav();
	console.log('clicked');
}

function openNav() {
	navbarIcon.classList.toggle('active');
	navContent.style.height = '100%';

	navContent.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });

	console.log('aaaa');
}

function closeNav() {
	navContent.style.height = '0%';

	let closing = navContent.animate([ { opacity: '1' }, { opacity: '.1' } ], { duration: 250, fill: 'forwards' });

	closing.onfinish = function(e) {
		navbarIcon.classList.toggle('active');
	};
}

navbarIcon.addEventListener('click', toggleNav);

// Navbar sticky
window.onscroll = function() {
	scrollFunc();
	scrollFunc2();
};

let sticky = navbar.offsetTop;

console.log(sticky);

function scrollFunc() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

function scrollFunc2() {
	if (window.pageYOffset >= sticky) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
}

dropDownHome.addEventListener('click', removeNav);
dropDownAbout.addEventListener('click', removeNav);
dropDownProjects.addEventListener('click', removeNav);
dropDownSchoolprojects.addEventListener('click', removeNav);
dropDownContact.addEventListener('click', removeNav);

function removeNav() {
	navContent.style.height = '0%';
	navbarIcon.classList.remove('active');
}