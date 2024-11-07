document.addEventListener('DOMContentLoaded', function() {
    // Optimizar la carga de recursos
    const optimization = {
        init: function() {
            this.lazyLoadElements();
            this.preloadCriticalAssets();
            this.deferNonCritical();
        },

        lazyLoadElements: function() {
            // Lazy loading para imágenes y contenido no crítico
            const lazyElements = document.querySelectorAll('img[data-src], iframe[data-src]');
            
            const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        element.src = element.dataset.src;
                        element.removeAttribute('data-src');
                        observer.unobserve(element);
                    }
                });
            });

            lazyElements.forEach(element => lazyLoadObserver.observe(element));
        },

        preloadCriticalAssets: function() {
            // Precargar recursos críticos
            const criticalAssets = [
                // Agrega aquí URLs de recursos críticos si los hay
            ];

            criticalAssets.forEach(asset => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = this.getResourceType(asset);
                link.href = asset;
                document.head.appendChild(link);
            });
        },

        deferNonCritical: function() {
            // Diferir la carga de scripts no críticos
            const scripts = document.querySelectorAll('script[data-defer]');
            scripts.forEach(script => {
                script.setAttribute('defer', '');
                script.removeAttribute('data-defer');
            });
        },

        getResourceType: function(url) {
            const extension = url.split('.').pop().toLowerCase();
            const types = {
                'css': 'style',
                'js': 'script',
                'png': 'image',
                'jpg': 'image',
                'jpeg': 'image',
                'webp': 'image',
                'gif': 'image',
                'woff2': 'font',
                'woff': 'font'
            };
            return types[extension] || 'resource';
        }
    };

    // Optimizar el rendimiento del DOM
    const performance = {
        init: function() {
            this.smoothScroll();
            this.optimizeEventListeners();
        },

        smoothScroll: function() {
            // Implementar scroll suave
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },

        optimizeEventListeners: function() {
            // Implementar delegación de eventos
            document.addEventListener('click', function(e) {
                // Manejar eventos de click de manera eficiente
                if (e.target.matches('.menu-item')) {
                    // Lógica para elementos del menú
                }
            });
        }
    };

    // Inicializar optimizaciones
    optimization.init();
    performance.init();
});

// Cache para recursos estáticos
const CACHE_NAME = 'basculas-klibra-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    // Agregar aquí otros recursos estáticos
];

// Gestión del cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
