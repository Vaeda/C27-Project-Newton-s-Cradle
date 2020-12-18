class Bob {

    constructor (x, y, radius) {

        var options = {
            isStatic: false,
            density : 1.2,
            restitution:1,
            friction: 0.4

        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {

        push()
        translate(this.body.position.x, this.body.position.y)
       // ellipseMode(RADIUS);
        stroke("pink");
        fill("pink");
        ellipse(0,0, this.radius*2, this.radius*2);
        pop();
    }

}