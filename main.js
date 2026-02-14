const canvas = document.getElementById('valentineCanvas');
const ctx = canvas.getContext('2d');
const revealBtn = document.getElementById('revealBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

let width, height, particles = [];
const flowerCount = 100;
const petalCount = 50;

function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
}

window.addEventListener('resize', resize);
resize();

class Flower {
    constructor(x, y, size, color) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.targetX = this.x;
        this.targetY = this.y;
        // Slightly smaller flowers for more detail
        this.size = size || Math.random() * 6 + 3;
        this.color = color || `hsl(${Math.random() * 30 + 340}, 80%, 60%)`;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 };
        this.acc = { x: 0, y: 0 };
        this.maxSpeed = 3;
        this.maxForce = 0.1;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.fillStyle = this.color;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.ellipse(0, -this.size / 2, this.size / 2, this.size, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.rotate((Math.PI * 2) / 5);
        }

        ctx.fillStyle = '#ffb3c1';
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle += 0.01;

        if (this.x < 0 || this.x > width) this.velocity.x *= -1;
        if (this.y < 0 || this.y > height) this.velocity.y *= -1;
    }

    applyBehaviors(points) {
        let arrive = this.arrive(points);
        this.acc.x += arrive.x;
        this.acc.y += arrive.y;

        this.velocity.x += this.acc.x;
        this.velocity.y += this.acc.y;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.acc.x = 0;
        this.acc.y = 0;
    }

    arrive(target) {
        let desired = { x: target.x - this.x, y: target.y - this.y };
        let dist = Math.sqrt(desired.x * desired.x + desired.y * desired.y);
        let speed = this.maxSpeed;
        if (dist < 100) {
            speed = (dist / 100) * this.maxSpeed;
        }
        let mag = Math.sqrt(desired.x * desired.x + desired.y * desired.y);
        if (mag === 0) return { x: 0, y: 0 };
        desired.x = (desired.x / mag) * speed;
        desired.y = (desired.y / mag) * speed;

        let steer = { x: desired.x - this.velocity.x, y: desired.y - this.velocity.y };
        let steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
        if (steerMag > this.maxForce) {
            steer.x = (steer.x / steerMag) * this.maxForce;
            steer.y = (steer.y / steerMag) * this.maxForce;
        }
        return steer;
    }
}

class Petal {
    constructor() {
        this.init();
    }

    init() {
        this.x = Math.random() * width;
        this.y = -20;
        this.size = Math.random() * 8 + 4;
        this.color = `hsl(${Math.random() * 20 + 340}, 100%, 80%)`;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1 + 1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
    }

    update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y / 50) + this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y > height) {
            this.init();
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

const petals = Array.from({ length: 50 }, () => new Petal());
let flowers = [];

function getTeAmoPoints() {
    // Use a slightly smaller font if needed, but make it very bold
    ctx.font = "bold 160px Montserrat";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Te amo", width / 2, height / 2);

    const imageData = ctx.getImageData(0, 0, width, height);
    const points = [];
    // Reduced step from 15 to 8 for much higher definition
    const step = 8;

    for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
            if (imageData.data[(y * width + x) * 4 + 3] > 128) {
                points.push({ x, y });
            }
        }
    }
    ctx.clearRect(0, 0, width, height);
    return points;
}

let points = [];
let formationActive = false;

function init() {
    points = getTeAmoPoints();
    flowers = points.map(p => new Flower());
    animate();
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
        p.update();
        p.draw();
    });

    flowers.forEach((f, i) => {
        if (formationActive) {
            f.applyBehaviors(points[i % points.length]);
        } else {
            f.update();
        }
        f.draw();
    });

    requestAnimationFrame(animate);
}

revealBtn.addEventListener('click', () => {
    formationActive = !formationActive;
    if (formationActive) {
        revealBtn.textContent = "¡Te amo infinitamente!";
        setTimeout(() => {
            hiddenMessage.classList.add('show');
        }, 1500);
    } else {
        revealBtn.textContent = "Toca aquí para descubrir una sorpresa";
        hiddenMessage.classList.remove('show');
    }
});

init();
