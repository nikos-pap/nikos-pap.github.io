const container = document.querySelector('.carousel-container')
const slides = document.querySelectorAll('.carousel-slide');
const wrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotIndicator = document.querySelector('.dot-indicator');
const main = document.querySelector('.main')

let currentIndex = 0;

// Function to create dots based on the number of slides
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentIndex)
            dot.classList.add('active');


        dot.addEventListener('click', () => {
            currentIndex = index; // Set the slide index based on which dot was clicked
            updateCarousel();
        });
        dotIndicator.appendChild(dot);
    });
}


function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -currentIndex * (slideWidth + container.clientWidth) + container.clientWidth / 2;
    wrapper.style.transform = `translateX(${newTransformValue}px)`;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

createDots();
updateCarousel();

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});