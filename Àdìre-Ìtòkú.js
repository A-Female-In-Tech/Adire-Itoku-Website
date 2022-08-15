// Navbar
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//Toggle open/close menu
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

// Slider
const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.slider-img');
const overlay = document.querySelector('.overlay');
const anim = document.querySelectorAll('.anim');

// Get the CSS variables from root
const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

// Image Path
const images = [
    'adire5.jpg',
    'adire1.jpg',
    'adire7.jpg',
    'adire.jpg',
    'adire6.jpg',
];

// Theme Colors
const colors = [
    '#feb57b',
    '#ffa901',
    '#b5162e',
    '#468cc2',
    '#27223f',
];

function retrigAnim() {
    // Retrigger animations
    for(let i = 0; i < anim.length; i++) {
        anim[i].style.animation = 'none';
        anim[i].offsetHeight;
        anim[i].style.animation = null;
    }
}

function slider(i) {
    // Retrigger animations
    retrigAnim();
    // Reset image source
    img.src = images[i];
    // Rechange accent colour
    r.style.setProperty('--accent', colors[i]);
    // Toggle active class to pagination
    // Remove active class from all
    for(let i = 0; i < pag.length; i++) {
        pag[i].classList.remove('active');
    }
    // Reset active class to clicked pagination
    pag[i].classList.add('active');
}

// Pagination
for(let i = 0; i < pag.length; i++) {
    // Add click event for all pagination
    pag[i].addEventListener('click', () => {
        // Run the slider function
        slider(i);
        // Set id to clicked pagination index
        id = i;
        // Stop Auto Slide
        stopAutoSlide()
    });
}

// Prev
prev.addEventListener('click', () => {
    // Decrement img id
    id--;
    // Check if id is smaller than the number of available slides;
    if(id < 0) {
        id = pag.length - 1;
    }
    // Run the slider function
    slider(id);
    // Stop Auto Slide
    stopAutoSlide();
});

// Next
next.addEventListener('click',() => {
    nextSlide();
    // Stop Auto Slide
    stopAutoSlide();
});

function nextSlide() {
    // Increment img id
    id++;
    // Check if id is greater than the number of available slides;
    if(id > pag.length - 1) {
        id = 0;
    }
    // Run the slider function
    slider(id);
}

// Automate slider
let autoSlide = setInterval(nextSlide, 10000);

// Stop Automatic Slide
function stopAutoSlide() {
    clearInterval(autoSlide);

// Restart Auto slider
autoSlide = setInterval(nextSlide, 10000);
}