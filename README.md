# Canvas-Transformacoes

## Colaboradores

- Kauã de Castro(KalCastro)
- Vincenzo Monaco(VincenMonaco)

## Demonstração

Este projeto é um exemplo de uso de conceitos de translação, rotação, escala, transform e clipping path em uma imagem carregada no Canvas HTML. 

## Conceitos adicionados

As seguintes partes do código adicionam os conceitos/funções na imagem carregada no Canvas HTML:

- *Translação*: A translação é adicionada na linha 32 do arquivo `script.js`, onde as variáveis `imgX` e `imgY` são usadas como coordenadas de translação para centralizar a imagem horizontalmente e verticalmente.

- *Rotação*: A rotação é adicionada na linha 34 do arquivo `script.js`, onde a variável `imgRotation` é usada para rotacionar a imagem.

- *Escala*: A escala é adicionada na linha 35 do arquivo `script.js`, onde a variável `imgScale` é usada para aumentar ou diminuir o tamanho da imagem.

- *Transform*: A transformação é adicionada nas linhas 32, 34 e 35 do arquivo `script.js`, onde as variáveis `imgX`, `imgY`, `imgRotation` e `imgScale` são usadas em conjunto para aplicar uma transformação completa na imagem.

- *Clipping Path*: O clipping path é adicionado nas linhas 38 a 41 do arquivo `script.js`, onde um caminho de recorte é definido em torno da imagem para que apenas a parte dentro do caminho seja exibida.

## HTML

### Doctype e HTML Básico

- O arquivo HTML começa com o `<!DOCTYPE html>`, que define o tipo de documento HTML.

- A estrutura básica do HTML inclui as tags `<html>`, `<head>`, e `<body>`.

### Meta Charset e Título

- A tag `<meta charset="UTF-8">` define o conjunto de caracteres UTF-8 para garantir que o texto seja exibido corretamente.

- O `<title>` define o título da página, que neste caso é "Canvas".

### Favicon

- A tag `<link rel="icon" type="image/png" href="imgs/images.jpg">` define o ícone (favicon) que será exibido na aba do navegador. O arquivo de ícone está localizado em "imgs/images.jpg".

### Estilo CSS

- A tag `<link rel="stylesheet" type="text/css" href="css/style.css" />` vincula um arquivo CSS externo chamado "style.css" para aplicar estilos à página.

### Script JavaScript

- A tag `<script src="script/script.js" defer></script>` vincula um arquivo JavaScript externo chamado "script.js" e usa o atributo `defer` para garantir que o script seja executado após o carregamento da página.

### Corpo da Página

- O `<body>` da página contém o conteúdo visível para o usuário.

- Um título `<h1>` "Canvas Conceitos" é exibido.

- Um elemento `<canvas>` com o ID "Canvas" é usado para renderizar a imagem.

## CSS

- O CSS define a aparência da página HTML, incluindo o fundo, o estilo do elemento canvas.

- A página usa gradientes lineares para criar um fundo colorido.

- O elemento canvas possui cantos arredondados e uma borda para enquadrar a área do Canvas.

### Estilo do Body

- O fundo do `body` da página é definido usando um gradiente linear que vai de cima para baixo, usando cores #5d048c e #ed05da. Isso cria um fundo atraente e colorido para a página.

- O texto é centralizado na página usando `text-align: center`.

- O `margin` e o `padding` são definidos como 0 para eliminar qualquer espaço indesejado ao redor do conteúdo.

- A altura do `body` é definida como `100vh` para preencher toda a altura da janela de visualização do navegador.

### Estilo do Elemento Canvas

- O elemento canvas com o ID "Canvas" recebe cantos arredondados usando as propriedades `border-top-left-radius`, `border-bottom-left-radius`, `border-top-right-radius` e `border-bottom-right-radius`.

- É adicionada uma borda preta com espessura de 2px ao redor do elemento canvas usando `border: 2px solid black`.

- O elemento canvas é centralizado na página horizontalmente usando `display: block` e `margin: 0 auto`.

## JavaScript
### Variáveis
- `canvas`: Uma referência ao elemento canvas HTML com o id 'Canvas'.
- `ctx`: O contexto de renderização 2D para o elemento canvas.
- `img`: Um novo objeto de imagem.
- `imgX`, `imgY`: As coordenadas x e y da imagem no canvas.
- `imgScale`: A escala da imagem.
- `imgRotation`: A rotação da imagem.

### Funções
- `drawImage()`: Esta função limpa o canvas, salva o estado atual do contexto, traduz o ponto de origem para as coordenadas da imagem, rotaciona e dimensiona a imagem, define um caminho de recorte em torno da imagem, desenha a imagem e restaura o estado do contexto.
- `handleKeyPress(event)`: Esta função manipula eventos de teclado para mover, girar e dimensionar a imagem.

### Eventos
- `img.onload = function() { drawImage(); };`: Quando a imagem é carregada, a função `drawImage()` é chamada para desenhar a imagem no canvas.
- `document.addEventListener('keydown', handleKeyPress);`: Um ouvinte de evento é adicionado ao documento para chamar a função `handleKeyPress()` quando uma tecla é pressionada.

## Diagrama de Classe


![imagemdjw2](https://github.com/KalCastro/Canvas-Transforma-es/assets/129300311/d10916eb-9b8f-4210-9641-fb39a3d03250)
