function Key(x,y, image){
    Kinetic.Image.call(this);
    this.setWidth(30);
    this.setHeight(20);
    this.setX(x);
    this.setY(y);
    this.setImage(image);
}

Key.prototype = Object.create(Kinetic.Image.prototype);