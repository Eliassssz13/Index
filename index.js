document.addEventListener('DOMContentLoaded', function() {
    // Greeting Alert
    ('Welcome to Lulu in Barcelona!');

    // Dynamically Set Year in Footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Photographer's Personal Website. All rights reserved.`;
});

