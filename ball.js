class Ball{
    constructor(x,y,r){

        var options={
          //isStatic:true
          restitution:0.9
          
        }

    this.body = Bodies.circle(x,y,r,options)
    this.r = r;
    World.add(world,this.body)
    
     }
    display(){
        //var pos = this.body.position
        //ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
}