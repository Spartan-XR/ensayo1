function visualizar() { 
    let hash = window.location.hash; 
    document.getElementById('industrial').style.display = 'none'; 
    document.getElementById('comercial').style.display = 'none'; 
    document.getElementById('dosificadora').style.display = 'none';
    document.getElementById('bascula_ganadera').style.display = 'none';
    document.getElementById('barra_ganadera').style.display = 'none';  
    document.getElementById('camionera_ejes').style.display = 'none'; 
    document.getElementById('camionera_completa').style.display = 'none'; 
    document.getElementById('indicadores').style.display = 'none';  
    document.getElementById('celdas').style.display = 'none'; 
    document.getElementById('ensacadoras').style.display = 'none';
    document.getElementById('software').style.display = 'none';  
    
    if (hash === '#industrial') { 
        document.getElementById('industrial').style.display = 'block'; 
    } else if (hash === '#comercial') { 
        document.getElementById('comercial').style.display = 'block'; 
    } else if (hash === '#dosificadora') { 
        document.getElementById('dosificadora').style.display = 'block'; 
    } else if (hash === '#bascula_ganadera') { 
        document.getElementById('bascula_ganadera').style.display = 'block'; 
    } else if (hash === '#barra_ganadera') { 
        document.getElementById('barra_ganadera').style.display = 'block'; 
    } else if (hash === '#camionera_ejes') { 
        document.getElementById('camionera_ejes').style.display = 'block'; 
    } else if (hash === '#camionera_completa') { 
        document.getElementById('camionera_completa').style.display = 'block'; 
    } else if (hash === '#indicadores') { 
        document.getElementById('indicadores').style.display = 'block'; 
    } else if (hash === '#celdas') { 
        document.getElementById('celdas').style.display = 'block'; 
    } else if (hash === '#ensacadoras') { 
        document.getElementById('ensacadoras').style.display = 'block'; 
    } else if (hash === '#software') { 
        document.getElementById('software').style.display = 'block'; 
    } 
} 
    
    window.addEventListener('load', visualizar); 
    window.addEventListener('hashchange', visualizar);