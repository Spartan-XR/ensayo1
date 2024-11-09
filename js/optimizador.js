// Optimización de carga y mejora de CLS
document.addEventListener('DOMContentLoaded', function() {
    // Reservar espacio para imágenes y contenido dinámico
    function reserveSpace() {
        const dynamicElements = document.querySelectorAll('.producto-container');
        dynamicElements.forEach(element => {
            element.style.minHeight = '300px';
            element.style.position = 'relative';
        });
    }

    // Optimizar la carga de fuentes
    function optimizeFonts() {
        const fontStyles = document.createElement('link');
        fontStyles.rel = 'preload';
        fontStyles.as = 'style';
        fontStyles.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
        document.head.appendChild(fontStyles);
    }

    // Lazy loading para imágenes
    function lazyLoadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
    }

    // Optimizar formularios
    function optimizeForms() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // Prevenir CLS en los formularios
            form.style.minHeight = form.offsetHeight + 'px';
            
            // Validación en tiempo real
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Aquí iría la lógica de validación
            });
        });
    }

    // Optimizar menú de navegación
    function optimizeNavigation() {
        const nav = document.querySelector('nav');
        if (nav) {
            nav.style.height = nav.offsetHeight + 'px';
            nav.style.position = 'relative';
        }
    }

    // Performance monitoring
    function measurePerformance() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    // Registrar métricas de CLS
                    if (entry.entryType === 'layout-shift') {
                        console.log('CLS:', entry.value, entry.hadRecentInput);
                    }
                });
            });

            observer.observe({ entryTypes: ['layout-shift'] });
        }
    }

    // Optimizar carga de contenido dinámico
    function optimizeDynamicContent() {
        // Establecer dimensiones para contenedores de productos
        const productContainers = document.querySelectorAll('.producto-container');
        productContainers.forEach(container => {
            container.style.aspectRatio = '16/9';
            container.style.contentVisibility = 'auto';
        });
    }

    // Inicializar todas las optimizaciones
    function init() {
        reserveSpace();
        optimizeFonts();
        lazyLoadImages();
        optimizeForms();
        optimizeNavigation();
        measurePerformance();
        optimizeDynamicContent();
    }

    // Ejecutar optimizaciones
    init();

    // Manejar redimensionamiento de ventana
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            init();
        }, 250);
    });
});