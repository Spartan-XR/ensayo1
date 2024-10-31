function ajustarVisibilidad() { 
    let hash = window.location.hash; 
    document.getElementById('inicio_principal').style.display = 'block'; 
    
if (hash === '#catalogo') {
    document.getElementById('cat_ganaderas').style.display = 'none';
    document.getElementById('inicio_principal').style.display = 'none';
    document.getElementById('cat_principal').style.display = 'block';
    document.getElementById('cat_camionera').style.display = 'none';  
}else if (hash === '#inicio') { 
    document.getElementById('inicio_principal').style.display = 'block';
    document.getElementById('cat_principal').style.display = 'none';  
}else if(hash === '#cat_ganaderas') { 
    document.getElementById('cat_ganaderas').style.display = 'block';
    document.getElementById('cat_principal').style.display = 'none'; 
    document.getElementById('inicio_principal').style.display = 'none'; 
}else if(hash === '#cat_camionera') { 
    document.getElementById('cat_ganaderas').style.display = 'none';
    document.getElementById('cat_camionera').style.display = 'block';
    document.getElementById('cat_principal').style.display = 'none'; 
    document.getElementById('inicio_principal').style.display = 'none'; 
} 
} 
window.addEventListener('load', ajustarVisibilidad);
window.addEventListener('hashchange', ajustarVisibilidad);