class Ground{
    constructor(x,y,width,height){
      //properties
      var Options = {
          restitution: 1.0,
          friction : 0.3,
          density : 1.0,
          isStatic:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,Options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
//functions
display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x, pos.y);
 rotate(angle);
 rectMode(CENTER);
 fill("brown");
 rect(0,0,this.width,this.height);
 pop();
}
}
