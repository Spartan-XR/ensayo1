function visualizar() { 
    let hash = window.location.hash; 
    /*----------------------------------------------------------------------*/
    /*--------------------------Default de los segmentos--------------------*/
    /*----------------------------------------------------------------------*/
    document.getElementById('industrial-im').style.display = 'none'; 
    document.getElementById('comercial-im').style.display = 'none'; 
    document.getElementById('dosificadora-im').style.display = 'none';
    document.getElementById('bascula_ganadera-im').style.display = 'none';
    document.getElementById('barra_ganadera-im').style.display = 'none';  
    document.getElementById('camionera_ejes-im').style.display = 'none'; 
    document.getElementById('camionera_completa-im').style.display = 'none'; 
    document.getElementById('indicadores-im').style.display = 'none';  
    document.getElementById('celdas-im').style.display = 'none'; 
    document.getElementById('ensacadoras-im').style.display = 'none';
    document.getElementById('software-im').style.display = 'none';  
    document.getElementById('accesorios-im').style.display = 'none'; 
    /*----------------------------------------------------------------------*/
    /*--------------------------Default de los galerias---------------------*/
    /*----------------------------------------------------------------------*/
    
    if (hash === '#industrial') { 
        document.getElementById('industrial-im').style.display = 'block';
    } else if (hash === '#comercial') { 
        document.getElementById('comercial-im').style.display = 'block'; 
    } else if (hash === '#dosificadora') { 
        document.getElementById('dosificadora-im').style.display = 'block'; 
    } else if (hash === '#bascula_ganadera') { 
        document.getElementById('bascula_ganadera-im').style.display = 'block'; 
    } else if (hash === '#barra_ganadera') { 
        document.getElementById('barra_ganadera-im').style.display = 'block'; 
    } else if (hash === '#camionera_ejes') { 
        document.getElementById('camionera_ejes-im').style.display = 'block'; 
    } else if (hash === '#camionera_completa') { 
        document.getElementById('camionera_completa-im').style.display = 'block'; 
    } else if (hash === '#indicadores') { 
        document.getElementById('indicadores-im').style.display = 'block'; 
    } else if (hash === '#celdas') { 
        document.getElementById('celdas-im').style.display = 'block'; 
    } else if (hash === '#ensacadoras') { 
        document.getElementById('ensacadoras-im').style.display = 'block'; 
    } else if (hash === '#software') { 
        document.getElementById('software-im').style.display = 'block'; 
    } else if (hash === '#accesorios') { 
        document.getElementById('accesorios-im').style.display = 'block'; 
    } 
} 
window.addEventListener('load', visualizar); 
window.addEventListener('hashchange', visualizar);