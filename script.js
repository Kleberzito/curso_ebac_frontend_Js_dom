document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var valorA = parseFloat(document.getElementById('valorA').value);
    var valorB = parseFloat(document.getElementById('valorB').value);

    if (valorB > valorA) {
        alert('Número B é maior que o número A.');
    } else {
        alert('Número B deve ser maior que o número A.');
    }
});