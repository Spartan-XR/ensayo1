/*-Genera la animacion de particulas al visualizarlo en la PC-*/
function createParticles() {
    /*-Constante donde almacenamos la ubicacion donde se mostraran las particulas-*/
    const container = document.getElementById('particles');
    /*-Aqui se hace la base para que las particulas se generen aleatoreamente-*/
    for(let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 10 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

createParticles();
setInterval(() => {
    document.getElementById('particles').innerHTML = '';
    createParticles();
}, 3000);