class Dustbin{
    constructor(x,y,width,height){
      //properties
      var Options = {
          'isStatic':true,
          'friction ': 0.3,
          'density' : 1.0,
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
 rectMode(CENTER);
 fill("white");
 rect(0,0,this.width,this.height);
 pop();
}
}
