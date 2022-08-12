function Hero(imagen){
    Kinetic.Image.call(this);
    this.setWidth(50);
    this.setHeight(70);
    this.vx = 15;
    this.vy = 0;
    this.limiteDer = 0;
    this.limiteTope = 0;
    this.direccion = 1;
    this.contador = 0;
    this.setImage(imagen);
    this.caminar = function(){
        this.move(this.vx, 0);
        if(this.getX() > this.limiteDer)
            this.move(this.limiteDer - this.getX(), 0);
    }
    this.retroceder = function(){
        this.move(-15, 0);
        if(this.getX() < 0)
            this.move(- this.getX(), 0);
    }
    this.saltar = function(){
        if(this.vy <=2 ){
            this.vy = -20;
            this.contador++;
        }
    }
    this.aplicarGravedad = function(gravedad, valRebote){
        this.vy += gravedad;
        this.move(0,this.vy);
        if((this.getY() + this.getHeight()) > this.limiteTope){
            this.setY(this.limiteTope - this.getHeight());
            this.vy = 0;
            this.contador = 0;
        }
            
    }
}

Hero.prototype = Object.create(Kinetic.Image.prototype);