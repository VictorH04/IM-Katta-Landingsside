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

const cardName = document.getElementById('cardName');
const cardDomain = document.getElementById('cardDomain');

const domainsContainer = document.querySelector('.domains-container');
// const cardLink = document.getElementById('cardLink');

let cardContent = [
    
    {
        name: 'Victor N. Hristov',
        domain: 'http://victor.imkatta.no',
    },
    
    {
        name: 'Edvard Høiby',
        domain: 'http://edvard.imkatta.no',
    },
    
    {
        name: 'Joakim Isaksen',
        domain: 'http://joakimi.imkatta.no',
    },
    
    {
        name: 'Martha Baldishol',
        domain: 'http://martha.imkatta.no',
    },
    
    {
        name: 'Endre M. Berg',
        domain: 'http://endre.imkatta.no',
    },
    
    {
        name: 'Adrian Bjørndahl',
        domain: 'http://adrianb.imkatta.no',
    },
    
    {
        name: 'Pavlos Douvlos',
        domain: 'http://pavlos.imkatta.no',
    },
    
    {
        name: 'Eivind S. Eikefjord',
        domain: 'http://eivind.imkatta.no',
    },
    
    {
        name: 'Marcus Flaterudhagen',
        domain: 'http://marcus.imkatta.no',
    },
    
    {
        name: 'Georg Flermoen',
        domain: 'http://georg.imkatta.no',
    },
    
    {
        name: 'M. Johannes Gunneng',
        domain: 'http://johannes.imkatta.no',
    },
            
    {
        name: 'Henrik S. Hagen',
        domain: 'http://henrik.imkatta.no',
    },
    
    {
        name: 'Bjørn Holmsand',
        domain: 'http://bjorn.imkatta.no',
    },
    
    {
        name: 'Amund Holmsand',
        domain: 'http://amund.imkatta.no',
    },
    
    {
        name: 'Caleb E. Holst',
        domain: 'http://caleb.imkatta.no',
    },
    
    
    {
        name: 'Henning Iversen',
        domain: 'http://henning.imkatta.no',
    },
    
    {
        name: 'Martin K. Myhre',
        domain: 'http://martin.imkatta.no',
    },
    
    {
        name: 'Celine S. Myklebust',
        domain: 'http://celine.imkatta.no',
    },
    
    {
        name: 'Jonathan M. Myrvold',
        domain: 'http://jonathan.imkatta.no',
    },
    
    {
        name: 'Sjur Nordlien',
        domain: 'http://sjur.imkatta.no',
    },
    
    {
        name: 'Peder Oppegård',
        domain: 'http://peder.imkatta.no',
    },
    
    {
        name: 'Hans A. Å. Østerhagen',
        domain: 'http://hans.imkatta.no',
    },
    
    {
        name: 'Sondre Røste-Kise',
        domain: 'http://sondre.imkatta.no',
    },
    
    {
        name: 'Eirik Sjøløkken',
        domain: 'http://eirik.imkatta.no',
    },
    
    {
        name: 'Jesper Skjeflo',
        domain: 'http://jesper.imkatta.no',
    },
    
    {
        name: 'Lars I. Syverinsen',
        domain: 'http://lars.imkatta.no',
    },
    
    {
        name: 'Jostein S. Tajesveen',
        domain: 'http://jostein.imkatta.no',
    },
    
    {
        name: 'Adrian A. Torp',
        domain: 'http://adriant.imkatta.no',
    },
    
    {
        name: 'Nora H. Wagenius',
        domain: 'http://nora.imkatta.no',
    },
    
    {
        name: 'Joachim O. Wilhelmsen',
        domain: 'http://joachimo.imkatta.no',
    },	
    
];

function replaceCard() {
    
    
    cardContent.forEach(cardContent => {
        let htmlTemp = `<div class="domains-container--card">
        
		<h1 class="domains-container--card_name">${cardContent.name}</h1>
		<h3 class="domains-container--card_domain"><a class="domains-container--card_link" href="${cardContent.domain}" target="_blank">${cardContent.domain}</a></h3>
        
	</div>`

        domainsContainer.innerHTML += htmlTemp;
    });

    return cardContent;
}

replaceCard();