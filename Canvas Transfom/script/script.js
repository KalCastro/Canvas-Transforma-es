const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'imgs/emoji.png';
let imgX = canvas.width / 2; // Inicializa a imagem no centro horizontal
let imgY = canvas.height / 2; // Inicializa a imagem no centro vertical
let imgScale = 0.3;
let imgRotation = 0;

img.onload = function() {
  drawImage();
};

function drawImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();

  ctx.translate(imgX, imgY); // Use imgX e imgY como coordenadas de translação
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
  if (event.key === 'a') {
    imgRotation += Math.PI / 180; // Rotação de 1 grau
  } else if (event.key === 'd') {
    imgRotation -= Math.PI / 180; // Rotação no sentido oposto de 1 grau
  } else if (event.key === 'w') {
    imgScale *= 1.1; // Aumenta a escala em 10%
  } else if (event.key === 's') {
    imgScale /= 1.1; // Diminui a escala em 10%
  } else if (event.key === 'q') {
    imgRotation = 0; // Redefine a rotação para 0 graus
    imgScale = 0.3; // Redefine a escala para 100%
  } else if (event.key === 'ArrowLeft') {
    imgX -= step; // Move a imagem para a esquerda
  } else if (event.key === 'ArrowRight') {
    imgX += step; // Move a imagem para a direita
  } else if (event.key === 'ArrowUp') {
    imgY -= step; // Move a imagem para cima
  } else if (event.key === 'ArrowDown') {
    imgY += step; // Move a imagem para baixo
  }
  drawImage();
}

document.addEventListener('keydown', handleKeyPress);
