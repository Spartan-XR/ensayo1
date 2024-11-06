document.getElementById('contactar').addEventListener('submit', function(e) {
    // Guardar referencia al formulario
    const form = this;
    
    // Esperar a que el formulario se envíe
    setTimeout(function() {
        // Limpiar todos los campos
        form.reset();
    }, 100);
});

// Verificar si el usuario viene de regreso de formspree
if (window.location.search.includes('submitted=true')) {
    // Limpiar el formulario
    document.getElementById('contactar').reset();
}
