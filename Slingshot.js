class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
    }

    fly(){
        this.sling.bodyA = null;

    }

    display(){
        image(this.sling1,200,25)
        image(this.sling2,170,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x-20, pointB.y+10);
            line(pointA.x, pointA.y, pointB.x+20, pointB.y+10);
        }
    }
    
}