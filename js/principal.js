function ajustarVisibilidad() {
    let hash = window.location.hash;
    const sections = ['inicio_principal', 'cat_principal', 'cat_ganaderas', 'cat_camionera', 'garantia', 'contacto'];

    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });

    switch (hash) {
        case '#catalogo':
            document.getElementById('cat_principal').style.display = 'block';
            break;
        case '#inicio':
            document.getElementById('inicio_principal').style.display = 'block';
            break;
        case '#cat_ganaderas':
            document.getElementById('cat_ganaderas').style.display = 'block';
            break;
        case '#cat_camionera':
            document.getElementById('cat_camionera').style.display = 'block';
            break;
        case '#garantia':
            document.getElementById('garantia').style.display = 'block';
            break;
        case '#contacto':
            document.getElementById('contacto').style.display = 'block';
            break;
        default:
            document.getElementById('inicio_principal').style.display = 'block';
            break;
    }
}

window.addEventListener('load', ajustarVisibilidad);
window.addEventListener('hashchange', ajustarVisibilidad);
