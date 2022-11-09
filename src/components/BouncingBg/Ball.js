export default class Ball {
    constructor(color, radius, angle, speed) {
        this.color = color;
        this.radius = radius;
        this.angle = angle;
        this.speed = speed;
        this.x = Math.floor(Math.random() * (window.innerWidth - 0) - 0);
        this.y = Math.floor(Math.random() * (window.innerHeight - 0) - 0);
        this.dx = Math.cos(angle) * speed;
        this.dy = Math.sin(angle) * speed;
        this.toRight = true;
        this.toBottom = true;
        this.iteration = 0;
    }
}