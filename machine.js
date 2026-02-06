document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.05, // Trigger as soon as 5% of section is visible
        rootMargin: '0px'
    };


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const section = entry.target;

            // Find all sections to determine odd/even for left/right effect
            const allSections = Array.from(sections);
            const sectionIndex = allSections.indexOf(section);

            if (entry.isIntersecting) {
                // Determine direction if not already set
                if (!section.classList.contains('reveal-left') && !section.classList.contains('reveal-right')) {
                    if (sectionIndex % 2 === 0) {
                        section.classList.add('reveal-left');
                    } else {
                        section.classList.add('reveal-right');
                    }
                }

                // Trigger entrance animation
                setTimeout(() => {
                    section.classList.add('reveal-active');
                }, 50);
            } else {
                // Remove active class to "hide" or "reverse" the animation
                section.classList.remove('reveal-active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
