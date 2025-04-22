function verificar() {
    const inputs = document.querySelectorAll('input[data-solution]');
    let correcto = 0;
    inputs.forEach(input => {
      const valor = input.value.toUpperCase();
      const solucion = input.dataset.solution;
      if (valor === solucion) {
        input.style.backgroundColor = '#b2fab4'; // verde claro
        correcto++;
      } else {
        input.style.backgroundColor = '#fab2b2'; // rojo claro
      }
    });

    if (correcto === inputs.length) {
      alert("¡Felicidades! Has completado el crucigrama.");
    }
  }
