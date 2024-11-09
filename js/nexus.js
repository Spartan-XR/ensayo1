// Función para mostrar sección según hash (de misc.js)
function mostrarSeccion() {
    const hash = window.location.hash;
    const secciones = document.getElementsByClassName('section');
    for(let seccion of secciones) {
        seccion.style.display = 'none';
    }
    if(hash) {
        const seccionMostrar = document.querySelector(hash);
        if(seccionMostrar) {
            seccionMostrar.style.display = 'block';
        }
    }
}

// Funcionalidad de partículas (de a.js)
function createParticles() {
    const container = document.getElementById('particles');
    for(let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 10 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar mostrarSeccion
    mostrarSeccion();
    window.addEventListener('hashchange', mostrarSeccion);

    // Inicializar partículas
    if(document.getElementById('particles')) {
        createParticles();
        setInterval(() => {
            document.getElementById('particles').innerHTML = '';
            createParticles();
        }, 3000);
    }

    // Inicializar funcionalidad del formulario (de limpiador.js)
    const formularioContacto = document.getElementById('contactar');
    if(formularioContacto) {
        formularioContacto.addEventListener('submit', function(e) {
            const form = this;
            setTimeout(function() {
                form.reset();
            }, 100);
        });

        if (window.location.search.includes('submitted=true')) {
            formularioContacto.reset();
        }
    }

    // Inicializar funcionalidad de galería (de galeria.js)
    const mainImage = document.getElementById('mainImage');
    const zoomWindow = document.getElementById('zoomWindow');
    const mainImageContainer = document.querySelector('.main-image-container');

    if(mainImage && zoomWindow && mainImageContainer) {
        function moveZoom(e) {
            const rect = mainImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            zoomWindow.style.backgroundImage = `url(${mainImage.src})`;
            zoomWindow.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
            zoomWindow.style.backgroundSize = '200%';
        }

        mainImageContainer.addEventListener('mouseenter', () => {
            zoomWindow.style.display = 'block';
        });

        mainImageContainer.addEventListener('mouseleave', () => {
            zoomWindow.style.display = 'none';
        });

        mainImageContainer.addEventListener('mousemove', moveZoom);

        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                mainImage.src = thumb.src;
            });
        });
    }
});