window.addEventListener('beforeunload', function() { 
    sessionStorage.setItem('formState', 'leaving'); 
}); // Limpiar el formulario al regresar a la página window.addEventListener('load', function() { 
if (sessionStorage.getItem('formState') === 'leaving') { 
    document.getElementById('contact-form').reset(); 
    sessionStorage.removeItem('formState'); } 
});
