// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Ajustar tamaño de canvas para los anillos de progreso
    adjustCanvasSize();
    
    // Dibujar gráficos circulares de progreso
    drawProgressRing('progressRingProject1', 75, '#2fff74');
    
    // Añadir efectos hover a las tarjetas
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.project-icon');
            if (icon) {
                icon.classList.add('pulse');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.project-icon');
            if (icon) {
                icon.classList.remove('pulse');
            }
        });
    });
    
    // Añadir listeners a los botones de detalles
    const detailButtons = document.querySelectorAll('[data-project]');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            showProjectDetails(projectId);
        });
    });
    
    // Listener para redimensionar la ventana
    window.addEventListener('resize', function() {
        adjustCanvasSize();
        drawProgressRing('progressRingProject1', 75, '#2fff74');
    });
});

// Función para ajustar el tamaño del canvas
function adjustCanvasSize() {
    const canvases = document.querySelectorAll('canvas');}