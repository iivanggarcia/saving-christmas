function Platform(x,y, imagen){
    Kinetic.Rect.call(this);
    this.setWidth(300);
    this.setHeight(40);
    this.setX(x);
    this.setY(y);
    this.setFillPatternImage(imagen);
}

Platform.prototype = Object.create(Kinetic.Rect.prototype);