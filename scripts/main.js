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








const divp = document.querySelector('.kitten');
const image = document.querySelector('.rotate-right');


const text1 = "The Century Tower's plaque.";
const text2 = "The Century Tower's plaque.";


image.onmouseenter = (e) => {
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   divp.textContent = text2;
};
image.onmouseleave = (e) => {
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   divp.textContent = text1;
};
