function Door(x,y, image){
    Kinetic.Image.call(this);
    this.setWidth(40);
    this.setHeight(80);
    this.setX(x);
    this.setY(y);
    this.setImage(image);
}

Door.prototype = Object.create(Kinetic.Image.prototype);