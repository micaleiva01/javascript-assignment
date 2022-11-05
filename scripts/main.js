const clickme = document.querySelector('.clickme');
const door = document.querySelector('.door');

door.style.display = 'none';

clickme.onclick = () => {
   door.style.display = 'block';
   clickme.style.display = 'none';
};

door.onclick = () => {
   door.style.display = 'none';
   clickme.style.display = 'block';
};








// designate elements to be used
const divp = document.querySelector('.kitten');
const image = document.querySelector('.rotate-right');


const text1 = "The Century Tower's plaque.";
const text2 = "The Century Tower's plaque.";

// NOTE that two CLASSES are defined in the CSS:
// .rotate-right
// .rotate-left
// these make the code below work

image.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   // change text
   divp.textContent = text2;
};
image.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   // change text back
   divp.textContent = text1;
};






/*
const clicker = document.getElementByID('button');
const plaque = document.querySelector('#image');

plaque.style.display = 'none';

clicker.onclick = showAndHide;

function showAndHide(){
  if (plaque.classList.contains('showing')){
    plaque.style.display = 'none';
    plaque.classList.remove('showing');
  } else {
    plaque.style.display = 'block';
    plaque.classList.add('showing');
  }
}
*/
