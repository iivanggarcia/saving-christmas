var stage, fondo, grupoAssets, grupoFrases;
var keyboard = {};
var intv;
var personaje;
var grav = 0.8;
var val_reb = 0; //var val_reb = -0.8;
var juego = new Game();
var puntaje;

var imgEn = new Image();
imgEn.src = 'imgs/cartoonCovid.png';
var imgGi = new Image();
imgGi.src = 'imgs/Gifts.png';
var imgPa = new Image();
imgPa.src = 'imgs/pattern.jpg';
var imgDo = new Image();
imgDo.src = 'imgs/Door.png';
var imgKe = new Image();
imgKe.src = 'imgs/Key.png';
var imgSa = new Image();
imgSa.src = 'imgs/Santa.png';
var imgFo = new Image();
imgFo.src = 'imgs/background.jpg';

grupoAssets = new Kinetic.Group({
    x:0,
    y:0
});

//dimensiones del juego
stage= new Kinetic.Stage({
    container: 'game',
    width: 1355,
    height: 600
});

imagenFondo = new Kinetic.Image({
    x:0,
    y:0,
    Image: imgFo,
    width: stage.getWidth(),
    height: stage.getHeight()
});

puntaje = new Kinetic.Text({
    text: "Puntaje: 0",
    height: 25,
    width:150,
    x: stage.getWidth() - 150,
    y: 0,
    fill: 'White',
    fontFamily: 'Arial',
    fontSize: 20
});

indication1 = new Kinetic.Text({
    text: "Practice christmas vocabulary in the platforms",
    height: 25,
    width:400,
    x: 50 ,
    y: stage.getHeight() - stage.getHeight() +20,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});

frase1_1 = new Kinetic.Text({
    text: "Merry Christmas",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/1.5 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase1_2 = new Kinetic.Text({
    text: "  Candy Cane",
    height: 25,
    width:150,
    x: 390 +85,
    y: stage.getHeight()/3 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase1_3 = new Kinetic.Text({
    text: "  Christmas Bell",
    height: 25,
    width:150,
    x: 790 +85,
    y: stage.getHeight()/3 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase1_4 = new Kinetic.Text({
    text: "      Reindeer",
    height: 25,
    width:150,
    x: 900 +85,
    y: stage.getHeight()/1.3 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase1_5 = new Kinetic.Text({
    text: "Santa's Sleigh",
    height: 25,
    width:150,
    x: 1550 +85,
    y: stage.getHeight()/3 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});

function nivelUno(){
    juego.puntaje = 0;
    juego.llave = true;
    juego.nivel = 1;
    fondo = new Kinetic.Layer();

    grupoAssets.add(new Enemy(50,stage.getHeight()/1.5 -60, imgEn));
    grupoAssets.add(new Enemy(700,stage.getHeight()/3 -60, imgEn));
    grupoAssets.add(new Enemy(620,stage.getHeight() -80, imgEn));
    grupoAssets.add(new Enemy(920,stage.getHeight()/1.3 -60, imgEn));
    grupoAssets.add(new Enemy(920,stage.getHeight() - 80, imgEn));
    grupoAssets.add(new Enemy(1400,stage.getHeight() - 80, imgEn));

    var piso = new Platform(0,stage.getHeight() -15,imgPa);
    piso.setWidth(stage.getWidth()*2);
    grupoAssets.add(piso);
    grupoAssets.add(new Platform(50, stage.getHeight()/1.5, imgPa));
    grupoAssets.add(new Platform(390, stage.getHeight()/3, imgPa));
    grupoAssets.add(new Platform(790, stage.getHeight()/3, imgPa));
    grupoAssets.add(new Platform(900, stage.getHeight()/1.3, imgPa));
    grupoAssets.add(new Platform(1550, stage.getHeight()/3, imgPa));

    grupoAssets.add(new Gift(350, stage.getHeight()/3 -130, imgGi));
    grupoAssets.add(new Gift(1000, stage.getHeight() -100, imgGi));
    grupoAssets.add(new Gift(1200, stage.getHeight()/3 -130, imgGi));
    grupoAssets.add(new Gift(1950, stage.getHeight()/3 -130, imgGi));

    grupoAssets.add(new Door(2000, stage.getHeight()-95, imgDo));

    indication1.setX(50);
    grupoAssets.add(indication1);
    frase1_1.setX(50+85);
    grupoAssets.add(frase1_1);
    frase1_2.setX(390+85);
    grupoAssets.add(frase1_2);
    frase1_3.setX(790+85);
    grupoAssets.add(frase1_3);
    frase1_4.setX(900+85);
    grupoAssets.add(frase1_4);
    frase1_5.setX(1550+85);
    grupoAssets.add(frase1_5);

    personaje = new Hero(imgSa);

    personaje.setX(0);
    personaje.setY(stage.getHeight() - personaje.getHeight());
    personaje.limiteDer = stage.getWidth() - personaje.getWidth();
    personaje.limiteTope = stage.getHeight();
    fondo.add(imagenFondo);
    fondo.add(personaje);
    //console.log(personaje);
    fondo.add(grupoAssets);
    fondo.add(puntaje);
    //fondo.add(frase1);
    stage.add(fondo);
    intv = setInterval(frameLoop, 1000/20);
}

indication2 = new Kinetic.Text({
    text: "You need the key to win this level",
    height: 25,
    width:400,
    x: 50 ,
    y: stage.getHeight() - stage.getHeight() +20,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});

indication3 = new Kinetic.Text({
    text: "<- Door",
    height: 25,
    width:400,
    x: 3500 ,
    y: stage.getHeight() - stage.getHeight() +20,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});

indication4 = new Kinetic.Text({
    text: "<- Key",
    height: 25,
    width:400,
    x: 3500 ,
    y: stage.getHeight()/4 -50,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});

frase2_1 = new Kinetic.Text({
    text: "Snowman",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/1.5 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_2 = new Kinetic.Text({
    text: "Ornaments",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/3 +100 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_3 = new Kinetic.Text({
    text: "    Present",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/1.3 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_4 = new Kinetic.Text({
    text: "Poinsettia",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/1.3 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_5 = new Kinetic.Text({
    text: "   Candle",
    height: 25,
    width:150,
    x: 50 +85,
    y:  stage.getHeight()/4 - 20 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_6 = new Kinetic.Text({
    text: "  Baubles",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/4+20 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_7 = new Kinetic.Text({
    text: "Christmas Turkey",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/4+20 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_8 = new Kinetic.Text({
    text: "Ribbon",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/1.2 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_9 = new Kinetic.Text({
    text: "Hollyday",
    height: 25,
    width:150,
    x: 50 +85,
    y: stage.getHeight()/3 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});
frase2_10 = new Kinetic.Text({
    text: "I Hope You Enjoyed The Game!",
    height: 25,
    width:500,
    x: 50 +85,
    y: stage.getHeight()/4 -100 +10,
    fill: 'white',
    fontFamily: 'Times',
    fontSize: 20
});

function nivelDos(){
    fondo = new Kinetic.Layer();
    console.log("Bienvenido al nivel 2");
    juego.llave = false;
    //juego.puntaje = 0;

    //grupoAssets.add(new Enemy(110,stage.getHeight() - 80, imgEn));
    grupoAssets.add(new Enemy(660-120,stage.getHeight()/3 -60 + 100, imgEn));
    grupoAssets.add(new Enemy(760-80,stage.getHeight()/3 -60 + 100, imgEn));
    grupoAssets.add(new Enemy(860-50,stage.getHeight()/3 -60 + 100, imgEn));
    grupoAssets.add(new Enemy(960-30,stage.getHeight()/3 -60 + 100, imgEn));
    grupoAssets.add(new Enemy(1150,stage.getHeight()/1.3 +50, imgEn));
    grupoAssets.add(new Enemy(1900,stage.getHeight()/4 - 50, imgEn));
    grupoAssets.add(new Enemy(2000,stage.getHeight()/1.3 +50, imgEn));
    grupoAssets.add(new Enemy(2100,stage.getHeight()/1.3 +50, imgEn));
    grupoAssets.add(new Enemy(2200,stage.getHeight()/1.3 +50, imgEn));
    grupoAssets.add(new Enemy(2300,stage.getHeight()/1.3 +50, imgEn));
    grupoAssets.add(new Enemy(2400,stage.getHeight()/1.3 +50, imgEn));
    grupoAssets.add(new Enemy(2800,stage.getHeight()/1.3 +50, imgEn));

    var piso = new Platform(0,stage.getHeight() -15,imgPa);
    piso.setWidth(stage.getWidth()*4);
    grupoAssets.add(piso);
    grupoAssets.add(new Platform(80, stage.getHeight()/1.5, imgPa));
    grupoAssets.add(new Platform(650, stage.getHeight()/3 +100, imgPa));
    grupoAssets.add(new Platform(1000, stage.getHeight()/1.3, imgPa));
    grupoAssets.add(new Platform(1600, stage.getHeight()/1.3, imgPa));
    grupoAssets.add(new Platform(1600, stage.getHeight()/4 - 20, imgPa));
    grupoAssets.add(new Platform(1980, stage.getHeight()/4+20, imgPa));
    grupoAssets.add(new Platform(2600, stage.getHeight()/4+20, imgPa));
    //grupoAssets.add(new Platform(2500, stage.getHeight()/4+20, imgPa));
    
    grupoAssets.add(new Door(3700, stage.getHeight() / 4 - 165, imgDo));

    grupoAssets.add(new Platform(3450-700, stage.getHeight()/1.2, imgPa));
    grupoAssets.add(new Platform(3450-450, stage.getHeight()/3, imgPa));
    grupoAssets.add(new Platform(3450, stage.getHeight()/4 -100, imgPa));

    grupoAssets.add(new Gift(350, stage.getHeight()/1.5 -30, imgGi));
    grupoAssets.add(new Gift(700, stage.getHeight()/1.5 -50, imgGi));
    grupoAssets.add(new Gift(780, stage.getHeight()/1.5 -50, imgGi));
    grupoAssets.add(new Gift(860, stage.getHeight()/1.5 -50, imgGi));
    grupoAssets.add(new Gift(1400, stage.getHeight() -50, imgGi));
    grupoAssets.add(new Gift(3000, stage.getHeight() -50, imgGi));
    grupoAssets.add(new Gift(2600, stage.getHeight()/4 -50, imgGi));

    grupoAssets.add(new Key(1500, stage.getHeight()/4 -45, imgKe));
    
    indication2.setX(50);
    grupoAssets.add(indication2);
    indication3.setX(3750);
    grupoAssets.add(indication3);
    indication4.setX(1550);
    grupoAssets.add(indication4);
    frase2_1.setX(80+105);
    grupoAssets.add(frase2_1);
    frase2_2.setX(650+105);
    grupoAssets.add(frase2_2);
    frase2_3.setX(1000+105);
    grupoAssets.add(frase2_3);
    frase2_4.setX(1600+105);
    grupoAssets.add(frase2_4);
    frase2_5.setX(1600+105);
    grupoAssets.add(frase2_5);
    frase2_6.setX(1980+105);
    grupoAssets.add(frase2_6);
    frase2_7.setX(2600+75);
    grupoAssets.add(frase2_7);
    frase2_8.setX(3450-700+105);
    grupoAssets.add(frase2_8);
    frase2_9.setX(3450-450+105);
    grupoAssets.add(frase2_9);
    frase2_10.setX(3450+25);
    grupoAssets.add(frase2_10);

    personaje = new Hero(imgSa);

    personaje.setX(0);
    personaje.setY(stage.getHeight() - personaje.getHeight());
    personaje.limiteDer = stage.getWidth() - personaje.getWidth();
    personaje.limiteTope = stage.getHeight();
    fondo.add(imagenFondo);
    fondo.add(personaje);
    //console.log(personaje);
    fondo.add(grupoAssets);
    fondo.add(puntaje);
    //fondo.add(frase1);
    stage.add(fondo);
    intv = setInterval(frameLoop, 1000/20);
}

function moverPersonaje(){
    if(keyboard[37]){
        personaje.retroceder();
    }
    if(keyboard[39]){
        personaje.caminar();
    }
    if(keyboard[38] && personaje.contador < 1){
        personaje.saltar();
    }
}

function addKeyBoardEvents(){
    /*addEvent(window, "keydown", function(e){
        keyboard[e.code] = true;
    });
    addEvent(window, "keyup", function(e){
        keyboard[e.code] = false;
    });

    function addEvent(element,eventName,func){
        element.addEventListener(eventName, func, false);
    }*/
    window.addEventListener("keydown", function(event) {
        if (event.defaultPrevented) {
          return; // Do nothing if event already handled
        }
      
        switch(event.code) {
          case "KeyS":
          case "ArrowDown":
            // Handle "back"
            //updatePosition(-moveRate);
            break;
          case "KeyW":
          case "ArrowUp":
            // Handle "forward"
            if(personaje.contador < 1)
                personaje.saltar();
            break;
          case "KeyA":
          case "ArrowLeft":
            // Handle "turn left"
            personaje.retroceder();
            break;
          case "KeyD":
          case "ArrowRight":
            // Handle "turn right"
            personaje.caminar();
            if(personaje.getX() > (stage.getWidth()/2) ){
                personaje.vx = 2;
                for(i in grupoAssets.children){
                    var asset = grupoAssets.children[i];
                    asset.move(-5,0);
                }
            }
            else{
                personaje.vx = 10;
            }
            break;
        }
        // Consume the event so it doesn't get handled twice
        event.preventDefault();
      }, true);
}

function hit(a,b){
    var hit = false;
    //choques horizontales
    if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth())
    {
        //choques verticales
        if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
            hit = true;
    }
    //choque a con b
    if(b.getX() <= a.getX && b.getX() + b.getWidth() >= a.getX() + a.getWidth())
    {
        if(b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight())
            hit = true;
    }
    //choque b con a
    if(a.getX() <= b.getX && a.getX() + a.getWidth() >= b.getX() + b.getWidth())
    {
        if(a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight())
            hit = true;
    }
    return hit;
}

function aplicarFuerzas(){
    personaje.aplicarGravedad(grav, val_reb);
}

function moverEnemigos(){
    var enemigos = grupoAssets.children;
    for(i in enemigos){
        var enemigo = enemigos[i];
        if(enemigo instanceof Enemy)
            enemigo.mover();
    }
}

function detectarPlataformas(){
    var plataformas = grupoAssets.children;
    for(i in plataformas){
        var plataforma = plataformas[i];
        if(hit(plataforma, personaje))
            if(plataforma instanceof Enemy){
                if(personaje.vy > 2 && personaje.getY() < plataforma.getY()){
                    plataforma.remove();
                    juego.puntaje += 5;
                }
                else{
                    grupoAssets.removeChildren();
                    document.querySelector('#lose').style.display = 'block';
                    document.querySelector('#game').style.display = 'none';
                    document.querySelector('#score').innerHTML = juego.puntaje;
                    window.clearInterval(intv);
                }
            }
            else if(plataforma instanceof Platform && personaje.getY() < plataforma.getY() && personaje.vy >=0){
                personaje.contador = 0;
                personaje.setY(plataforma.getY() - personaje.getHeight());
                personaje.vy *= val_reb;
            }
            else if(plataforma instanceof Gift) {
                plataforma.remove();
                juego.puntaje += 1;
            }
            else if(plataforma instanceof Key){
                plataforma.remove();
                juego.llave = true;
                continue;
            }
            else if(plataforma instanceof Door && juego.llave == true) {
                if(juego.nivel == 1){
                    grupoAssets.removeChildren();
                    window.clearInterval(intv);
                    juego.nivel = 2;
                    nivelDos();
                }
                else if(juego.nivel == 2){
                    grupoAssets.removeChildren();
                    document.querySelector('#win').style.display = 'block';
                    document.querySelector('#game').style.display = 'none';
                    document.querySelector('#score').innerHTML = juego.puntaje;
                    window.clearInterval(intv);
                }
            }
    }
}

function dibujarTexto(){
    puntaje.setText('Puntaje: '+ juego.puntaje);
}

addKeyBoardEvents();
//nivelUno();

function frameLoop(){
    aplicarFuerzas();
    moverEnemigos();
    dibujarTexto();
    detectarPlataformas();
    console.log(personaje.getX());
    stage.draw();
}