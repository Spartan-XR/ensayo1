window.addEventListener('beforeunload', function() { 
    sessionStorage.setItem('formState', 'leaving'); 
}); // Limpiar el formulario al regresar a la página window.addEventListener('load', function() { 
if (sessionStorage.getItem('formState') === 'leaving') { 
    document.getElementById('contact-form').reset(); 
    sessionStorage.removeItem('formState'); } 
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    this.reset(); // Redirige a otra página 
    window.location.href = '../pages/contacto.html'; // Cambia 'gracias.html' por la URL de la página de destino 
});
