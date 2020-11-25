class redBox{
constructor(x,y,width,height){
    var options={
        isStatic:true
    }
this.body=Bodies.rectangle(x,y,20,height,options);
this.width=20;
this.height=height;
this.x=y;
this.y=y;
this.body.shapeColor="red";
World.add(this.body,isStatic);
}


}