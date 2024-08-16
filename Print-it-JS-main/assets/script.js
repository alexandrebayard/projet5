const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variables

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

let i = 0;

const bannerImage = document.getElementById("banner-img");
const bannerParagraphe = document.getElementById("banner_paragraphe");


//  les points

function createDot() {
	slides.forEach((slides, index) => {
		let dot = document.createElement("div");
		dot.classList.add("dot");
		if (index === 0) dot.classList.add("dot_selected");

		dot.addEventListener("click", function() {
			changeSlideTo(index);
		});
		dotsContainer.appendChild(dot);
	});
};

// fonctions

function updateDots() {
	let dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === i);
	});
};

function changeSlide(direction) {
	i = i + direction;
	if (i > slides.length - 1) i = 0;
	if (i < 0) i = slides.length - 1;
	
	bannerImage.src="./assets/images/slideshow/" + slides[i].image;
	bannerParagraphe.innerHTML = slides[i].tagLine;

	updateDots();
};

function changeSlideTo(index) {
	i = index;
	bannerImage.src="./assets/images/slideshow/" + slides[i].image;
	bannerParagraphe.innerHTML = slides[i].tagLine;

	updateDots();
};

//  défilement des fleches gauche et droite 

arrowLeft.addEventListener("click", () => {
	changeSlide(-1);
});

arrowRight.addEventListener("click", () => {
	changeSlide(1);
});

//  fonction appelé

createDot();



