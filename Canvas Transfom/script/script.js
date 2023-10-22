const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

let isDragging = false;
let offsetX, offsetY;

const img = new Image();
img.src = 'imgs/emoji.png';
let imgX = 0;
let imgY = 0;
let imgScale = 0.3;
let imgRotation = 0;

img.onload = function() {
  drawImage();
};

function drawImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  
  ctx.translate(canvas.width / 2, canvas.height / 2);
  
  ctx.rotate(imgRotation);
  
  ctx.scale(imgScale, imgScale);
  
  // Defina um caminho de recorte em torno da imagem
  ctx.beginPath();
  ctx.arc(0, 0, img.width / 2, 0, Math.PI * 2, false);
  ctx.clip();

  ctx.drawImage(img, -img.width / 2, -img.height / 2);
  
  ctx.restore();
}

// Função para manipular eventos de teclado
function handleKeyPress(event) {
  const step = 5;
  if (event.key === 'ArrowUp') {
    imgY -= step;
  } else if (event.key === 'ArrowDown') {
    imgY += step;
  } else if (event.key === 'ArrowLeft') {
    imgX -= step;
  } else if (event.key === 'ArrowRight') {
    imgX += step;
  } else if (event.key === 'a') {
    imgRotation += Math.PI / 180; // Rotação de 1 grau
  } else if (event.key === 'd') {
    imgRotation -= Math.PI / 180; // Rotação no sentido oposto de 1 grau
  } else if (event.key === 'w') {
    imgScale *= 1.1; // Aumenta a escala em 10%
  } else if (event.key === 's') {
    imgScale /= 1.1; // Diminui a escala em 10%
  } else if (event.key === 'q') { // Adicionar esta condição para lidar com a tecla 'q'
    imgRotation = 0; // Redefine a rotação para 0 graus
    imgScale = 0.3; // Redefine a escala para 100%
  }
  drawImage();
}

document.addEventListener('keydown', handleKeyPress);
