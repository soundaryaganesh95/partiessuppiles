document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove 'active' class from all links
            navLinks.forEach(item => item.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Optional: Prevent default link behavior if you're not navigating
            // event.preventDefault(); 
        });
    });
});
