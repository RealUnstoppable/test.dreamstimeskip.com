// unstoppable.js

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navListLarger = document.querySelector('.nav-list-larger');

mobileMenu.addEventListener('click', () => {
    navListLarger.classList.toggle('active');
    mobileMenu.classList.toggle('active'); // Toggle the 'active' class on the mobile menu icon
});


// Video Category Navigation
const categoryBtns = document.querySelectorAll('.category-btn');
const videoSections = document.querySelectorAll('.video-section'); // Select all video sections

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));

        // Add active class to the clicked button
        btn.classList.add('active');

        // Hide all video sections
        videoSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the corresponding video section
        const category = btn.textContent.toLowerCase();
        const selectedSection = document.getElementById(category);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    });
});