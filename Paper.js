class Paper{
  constructor(x, y) {
    var options = {
        isStatic:false,
        restitution:0.3,
        density:1.2
    }
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(x, y,30,options);
    this.radius=30;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius*2, this.radius*2);
    fill("purple");
    pop();
  }
};
