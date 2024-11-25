// Carousel Logic
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
});

// Skill Bar Animation
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const skillValue = skill.getAttribute('data-skill');
        if (skill.getBoundingClientRect().top < window.innerHeight) {
            skill.style.width = skillValue + '%';
        }
    });
});
