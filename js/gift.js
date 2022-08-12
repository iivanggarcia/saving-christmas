function Gift(x,y, imagen){
    Kinetic.Image.call(this);
    this.setWidth(30);
    this.setHeight(30);
    this.setX(x);
    this.setY(y);
    this.setImage(imagen);
}

Gift.prototype = Object.create(Kinetic.Image.prototype);