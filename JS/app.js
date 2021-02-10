// Navbar
const navbarIcon = document.querySelector('.navbar-icon');
let navbar = document.querySelector('.navbar');
let nav = document.querySelector('.nav');
const navContent = document.getElementById('navContent');
// const active = doucmnet.querySelector('.active');
let display = navContent.classList.toggle('display');

const dropDownHome = document.getElementById('dropdown-home');
const dropDownAbout = document.getElementById('dropdown-about');
const dropDownDomains = document.getElementById('dropdown-domains');

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
dropDownDomains.addEventListener('click', removeNav);


function removeNav() {
	navContent.style.height = '0%';
	navbarIcon.classList.remove('active');
}

let _CONTENT = [ "Programmering", "Medieproduksjon", "Ideutvikling", "Foto & Filmproduksjon", "Adobe programmer", "Interessebasert opplæring"];
                
// Current sentence being processed
let _PART = 0;

// Character number of the current sentence being processed 
let _PART_INDEX = 0;

// Holds the handle returned from setInterval
let _INTERVAL_VAL;

// Element that holds the text
let _ELEMENT = document.getElementById("text");

// Implements typing effect
function Type() { 
	let text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 2000);
	}
}

// Implements deleting effect
function Delete() {
	let text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 150);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// const cardName = document.getElementById('cardName');
// const cardDomain = document.getElementById('cardDomain');
// // const cardLink = document.getElementById('cardLink');

// let cardContent = [

// 			elev1 = {
// 				name: 'Edvard Høiby',
// 				domain: 'http://edvard.imkatta.no',
// 				index: 0
// 			},

// 			elev2 = {
// 				name: 'Victor N. Hristov',
// 				domain: 'http://victor.imkatta.no',
// 				index: 1
// 			}

// ];

// cardContent.forEach(el => {
// 	cardName.textContent = cardContent.elev1.name;
// 	cardDomain.textContent = cardContent
// });