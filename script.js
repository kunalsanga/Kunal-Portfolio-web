// Project slider functionality
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1",
        image: "project1.jpg",
        repo: "https://github.com/yourusername/project1"
    },
    // Add more projects here
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.repo}" target="_blank">View Repository</a>
    `;
    return card;
}

function initializeProjectSlider() {
    const slider = document.querySelector('.projects-slider');
    projects.forEach(project => {
        slider.appendChild(createProjectCard(project));
    });
}

// Scroll reveal animation
function handleScrollAnimation() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Project cards animation
function handleProjectCardsAnimation() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Add scroll progress indicator
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
}

// Add stagger animation for skill categories
function initializeSkillCategories() {
    const categories = document.querySelectorAll('.skill-category');
    categories.forEach((category, index) => {
        category.style.setProperty('--delay', index * 0.2);
    });
}

// Add smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initializeSkillCategories();
    handleScrollAnimation();
    handleProjectCardsAnimation();
    initializeProjectSlider();
});

// Update scroll progress on scroll
window.addEventListener('scroll', updateScrollProgress); 