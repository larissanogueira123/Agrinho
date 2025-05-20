function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}// Definindo variáveis
let waterDroplet;

function setup() {
  createCanvas(600, 400);
  // Criando uma gota d'água
  waterDroplet = new WaterDroplet();
}

function draw() {
  background(135, 206, 250); // Cor do céu

  // Desenhando o ciclo da água
  waterDroplet.update();
  waterDroplet.display();

  // Texto explicativo
  fill(0);
  textSize(18);
  text("Ciclo da Água", 20, 30);
  textSize(12);
  text("Clique para evaporar a água!", 20, 50);
}

// Função para simular a gota d'água
class WaterDroplet {
  constructor() {
    this.x = random(width);
    this.y = random(height / 2, height);
    this.size = 15;
    this.isEvaporating = false;
  }

  update() {
    if (this.isEvaporating) {
      this.y -= 2;
      this.size -= 0.1;
      if (this.size <= 0) {
        this.reset();
      }
    } else {
      this.y += 2;
      if (this.y >= height - this.size) {
        this.y = height - this.size;
      }
    }
  }

  display() {
    fill(0, 0, 255);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  reset() {
    this.x = random(width);
    this.y = random(height / 2, height);
    this.size = 15;
    this.isEvaporating = false;
  }

  evaporate() {
    this.isEvaporating = true;
  }
}

// Função que ocorre quando o usuário clica na tela
function mousePressed() {
  waterDroplet.evaporate();
}