// Dark mode toggle
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll animation for sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});
