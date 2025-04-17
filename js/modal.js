 // js/modal.js
 document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('moopModal');
    const openBtn = document.querySelector('.questionmark_btn');
    const closeBtn = document.querySelector('.modal-close');

    openBtn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        closeBtn.focus();
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        openBtn.focus();
    });

    // Close on Esc key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            openBtn.focus();
        }
    });

    // Close on click outside modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            openBtn.focus();
        }
    });
});