// ===============================
// CarModPlaza Main JavaScript
// ===============================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow when scrolling
window.addEventListener('scroll', function () {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 20px rgba(255,212,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Fade-in animation for gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

galleryItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";

    observer.observe(item);

});

// Fade-in animation for service cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});

console.log("CarModPlaza Website Loaded Successfully");