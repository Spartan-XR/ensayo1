// Zoom functionality
const mainImage = document.getElementById('mainImage');
const zoomWindow = document.getElementById('zoomWindow');
const mainImageContainer = document.querySelector('.main-image-container');

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

// Thumbnail functionality
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        // Add active class to clicked thumbnail
        thumb.classList.add('active');
        // Update main image
        mainImage.src = thumb.src;
    });
});