const prueba = document.querySelectorAll('.product-card');
// let prueba1 = document.getElementById('search-results');

console.log(prueba);
prueba.forEach((x) => {
  x.addEventListener('click', () => {
    x.classList.toggle('product-card--expand');
  });
});

// Toca colocar un iddentificador para cuando aumenten de size el conteneder todo cambie y se agrupe en el lugar que se le indique con todos.
