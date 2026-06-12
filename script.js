// Tailwind script already loaded via CDN

// Dark mode toggle (optional - can be expanded later)
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// Form submission handling
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    // Simple success message
    alert("Thank you! 🙏 Your appointment request has been received. We'll contact you soon to confirm your Divine Hair Styles appointment.");
    
    // Reset the form
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = 80; // Account for fixed navbar
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Simple hero parallax effect for clouds/background
window.addEventListener('scroll', () => {
    const hero = document.querySelector('section');
    if (hero) {
        const scrollY = window.scrollY;
        // Subtle movement for visual depth
        hero.style.backgroundPositionY = `${scrollY * 0.2}px`;
    }
});

// Optional: Add a floating "Book Now" button on mobile
if (window.innerWidth < 768) {
    const floatingBtn = document.createElement('a');
    floatingBtn.href = "#contact";
    floatingBtn.className = "fixed bottom-6 right-6 bg-gradient-to-r from-rose-500 to-amber-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-2 font-semibold z-50 hover:scale-105 transition-all";
    floatingBtn.innerHTML = `Book Now ✨`;
    document.body.appendChild(floatingBtn);
}