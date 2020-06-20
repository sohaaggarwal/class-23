class Box{
    constructor(x,y,width,height){
        var box_options={
            restitution:0.8
        }
            this.body= Bodies.rectangle(300,90,200,20,box_options);
            World.add(world,this.body);
        }
        display(){
            rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
    }
    