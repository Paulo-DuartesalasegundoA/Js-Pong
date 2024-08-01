let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let alturaRaquete = 90;
let xRaquete = 10;
let yRaquete = 155;
let larguraRaquete = 10;
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let xRaqueteOponente = 580;
let yRaqueteOponente = 155;
let raio = diametro / 2; 
let velocidadeRaqueteOponente = 0
let meuPlacar = 0;
let placarOponente = 0;

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  desenhoBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete ();
  colisaoRaquete ();
  mostraPlacar();
  contaPlacar();
}

function desenhoBolinha(){
square(xBolinha,yBolinha,diametro)
}

function movimentaBolinha(){
xBolinha += velocidadexBolinha;
yBolinha += velocidadeyBolinha;
}  

function verificaBorda(){
if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
}
  
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeyBolinha *= -1;
  }
}  
function desenhaRaquete(x, y){
  rect (x, y, larguraRaquete, alturaRaquete)
}

function raqueteEsquerda(){
  rect(x, y, 200, 100)
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function colisaoRaquete(){
  if(xBolinha - raio <= xRaquete + larguraRaquete &&
    yBolinha + raio >= yRaquete &&
    yBolinha - raio <= yRaquete + alturaRaquete){
    velocidadexBolinha *= -1;
    raquetada.play()
  }
  if(xBolinha + raio >= xRaqueteOponente &&
    yBolinha + raio >= yRaqueteOponente &&
    yBolinha - raio <= yRaqueteOponente + alturaRaquete){
    velocidadexBolinha *= -1;
    raquetada.play()
  }
}

function mostraPlacar(){
  fill('red')
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  fill(255);
  textSize(22);
  textAlign(CENTER);
  text(meuPlacar,150,25);
  text(placarOponente,450, 25);
}

function contaPlacar(){
// contabiliza placar do oponente
if(xBolinha - raio <=0){
   placarOponente += 1;
  ponto.play()
}
// contabiliza meu placar
  if(xBolinha + raio >= width){
     meuPlacar += 1;
    ponto.play()
    }
}

function preload (){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
