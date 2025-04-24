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

    // Mostrar el alert después de validar todas las celdas
    setTimeout(() => {
        if (correcto === inputs.length) {
            alert("¡Felicidades! Has completado el crucigrama.");
        }
    }, 100); // Retraso breve para asegurar que los colores se actualicen antes del alert
}

// Agregar funcionalidad para moverse entre celdas con las flechas del teclado
document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell input'); // Selecciona todos los inputs dentro de las celdas
    const grid = document.querySelectorAll('.cell'); // Selecciona todas las celdas (incluyendo bloqueadas)
    const gridColumns = 8; // Número de columnas en el grid

    function moveFocus(currentIndex, direction) {
        let nextIndex = currentIndex + direction;

        // Asegúrate de que el índice esté dentro de los límites del grid
        while (nextIndex >= 0 && nextIndex < grid.length) {
            const nextCell = grid[nextIndex]; // Obtén la celda correspondiente
            const input = nextCell.querySelector('input'); // Busca el input dentro de la celda

            if (input) {
                input.focus(); // Mueve el foco al input válido
                break;
            }

            nextIndex += direction; // Continúa buscando en la dirección indicada
        }
    }

    cells.forEach((cell, index) => {
        const parentIndex = Array.from(grid).indexOf(cell.parentElement); // Índice de la celda en el grid completo

        cell.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp': // Mover hacia arriba
                    moveFocus(parentIndex, -gridColumns);
                    break;
                case 'ArrowDown': // Mover hacia abajo
                    moveFocus(parentIndex, gridColumns);
                    break;
                case 'ArrowLeft': // Mover hacia la izquierda
                    moveFocus(parentIndex, -1);
                    break;
                case 'ArrowRight': // Mover hacia la derecha
                    moveFocus(parentIndex, 1);
                    break;
                default:
                    break;
            }
        });
    });
});
