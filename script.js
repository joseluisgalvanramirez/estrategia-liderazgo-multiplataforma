document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto Typewriter para el Título
    const highlight = document.querySelector('.highlight');
    const textToType = highlight.innerText;
    highlight.innerText = '';
    let index = 0;

    function typeWriter() {
        if (index < textToType.length) {
            highlight.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            // Quitar el cursor después de escribir
            highlight.style.borderRight = "none";
        }
    }
    typeWriter();

    // 2. Intersection Observer para las tarjetas (Scroll Reveal)
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));

    // 3. Log para Consola
    console.log("%c🚀 Liderazgo Multiplataforma v1.0", "color: #00f5d4; font-size: 14px; font-weight: bold;");
});