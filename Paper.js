class Paper{
    constructor(x,y,radius){
      //properties
      var Options = {
          'isStatic':false,
          'restitution':0.5,
          'friction':0.9,
          'density':1.2,
      }
      this.body =Matter.Bodies.circle(x, y, radius,Options)
      this.radius=radius;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
//functions
display(){
 var pos = this.body.position;
 push();
 translate(pos.x, pos.y);
 imageMode(CENTER);
 image(this.image,0,0,this.radius);
 pop();
}
}
