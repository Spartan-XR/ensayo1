document.querySelectorAll('.galeria').forEach(galeria => {
    const original = galeria.querySelector('.original-image');
    const zoomed = galeria.querySelector('.zoomed-image');
    const zoomView = galeria.querySelector('.zoom-view');
    const thumbnails = galeria.querySelectorAll('.thumbnail');

    // Función para cambiar la imagen principal
    function changeMainImage(imageSrc) {
        original.querySelector('img').src = imageSrc;
        zoomed.querySelector('img').src = imageSrc;
        
        // Actualizar la clase active en las miniaturas
        thumbnails.forEach(thumb => {
            if (thumb.dataset.src === imageSrc) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    // Event listeners para las miniaturas
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageSrc = this.dataset.src;
            changeMainImage(imageSrc);
        });
    });

    // Event listeners para el zoom
    original.addEventListener('mouseenter', function() {
        zoomView.classList.add('active');
    });

    original.addEventListener('mouseleave', function() {
        zoomView.classList.remove('active');
    });

    original.addEventListener('mousemove', function(e) {
        const bounds = original.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        
        const xPercent = (x / bounds.width) * 100;
        const yPercent = (y / bounds.height) * 100;
        
        zoomed.style.left = `-${xPercent}%`;
        zoomed.style.top = `-${yPercent}%`;
    });

    original.addEventListener('mouseleave', function() {
        zoomed.style.left = '0';
        zoomed.style.top = '0';
    });
});