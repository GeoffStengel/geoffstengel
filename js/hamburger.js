function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');

    const bars = document.querySelectorAll('.bar');
    
    // Toggle active class for animation
    bars[0].classList.toggle('active');
    bars[1].classList.toggle('active');
    bars[2].classList.toggle('active');
}