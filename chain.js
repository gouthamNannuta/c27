class Chain{
constructor(bodyA,bodyB){
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.5,
        length: 10
    }

     this.line = Constraint.create(options);
    World.add(world, this.line);
}   
    display() {
    strokeWeight(4);
    line(this.line.bodyA.position.x, this.line.bodyA.position.y, this.line.bodyB.position.x, this.line.bodyB.position.y);
}

}