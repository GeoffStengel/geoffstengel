document.querySelectorAll('#tooltips').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const tooltip = document.getElementById('custom-tooltip');
        const text = element.getAttribute('data-tooltip');
        if (text) {
            tooltip.textContent = text;
            tooltip.style.display = 'block';
            // Position 10px right and 10px below cursor
            let x = e.clientX + 10;
            let y = e.clientY + 10;
            // Keep tooltip within viewport
            const tooltipRect = tooltip.getBoundingClientRect();
            const maxX = window.innerWidth - tooltipRect.width - 5;
            const maxY = window.innerHeight - tooltipRect.height - 5;
            x = Math.min(x, maxX);
            y = Math.min(y, maxY);
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
        }
    });
    element.addEventListener('mouseleave', () => {
        document.getElementById('custom-tooltip').style.display = 'none';
    });
});