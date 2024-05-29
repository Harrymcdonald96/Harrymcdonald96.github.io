// JavaScript code to trigger animation when skills section comes into view
document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('skills');
    const skillsListItems = document.querySelectorAll('.skills-list li');

    function animateSkills() {
        const skillsSectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillsSectionTop < windowHeight * 0.75) { // Adjust the threshold as needed
            skillsListItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100); // Adjust the delay between each bullet point
            });

            // Optional: Apply final styles directly after animation completes
            setTimeout(() => {
                skillsListItems.forEach(item => {
                    item.classList.add('show');
                });
            }, skillsListItems.length * 100); // Adjust delay to match total animation duration

            window.removeEventListener('scroll', animateSkills); // Remove event listener once animation is triggered
        }
    }

    window.addEventListener('scroll', animateSkills);
});
document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtns = document.querySelectorAll('.more-info-btn');

    moreInfoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const details = this.parentNode.nextElementSibling;
            details.classList.toggle('hidden');
        });
    });
});


// JavaScript for custom cursor

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.top = e.clientY + 'px';
        cursor.style.left = e.clientX + 'px';
    });
});
