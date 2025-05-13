document.querySelectorAll('.conteudo_home .img_border').forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.classList.remove('not-hovered'); 
    img.classList.add('hovered'); 
  });

  img.addEventListener('mouseout', () => {
    img.classList.remove('hovered'); 
    img.classList.add('not-hovered'); 
  });
});