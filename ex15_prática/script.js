function contar() {
    var Inicio = document.getElementById('numInicio');
    var Fim = document.getElementById('numFim');
    var Passos = document.getElementById('passos');
    var res = document.getElementById('res');

    var numInicio = Number(Inicio.value);
    var numFim = Number(Fim.value);
    var passos = Number(Passos.value);

    if (Inicio.value.length == 0 || Fim.value.length == 0 || Passos.value.length == 0) {
        res.innerHTML = 'Impossível contar! Preencha todos os campos.';
    } else if (passos <= 0) {
        alert('Passos inválidos! Considerando passos como 1.');
        passos = 1;
        res.innerHTML = ''; // Limpa o conteúdo anterior
        while (numInicio <= numFim) {
            res.innerHTML += `${numInicio} `;
            numInicio += passos;
        }
    } else {
        res.innerHTML = ''; // Limpa o conteúdo anterior
        for (; numInicio <= numFim; numInicio += passos) {
            res.innerHTML += `${numInicio} `;
        }
    }
}