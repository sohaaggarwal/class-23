class GROUND{
constructor(x,y,width,height){
    var ground_options={
        isStatic:true
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
}
display(){
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
}

}