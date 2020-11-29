class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
    
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.posiiton;
        strokeWeight(3);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.posiiton.x, this.chain.bodyB.posiiton.y);
    }
}