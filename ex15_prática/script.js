function contar() {
    var Inicio = document.getElementById('numInicio');
    var Fim = document.getElementById('numFim');
    var Passos = document.getElementById('passos');
    var res = document.getElementById('res');

    var numInicio = Number(Inicio.value);
    var numFim = Number(Fim.value);
    var passos = Number(Passos.value);

    if (Inicio.value.length == 0 || Fim.value.length == 0 || Passos.value.length == 0) {
        res.innerHTML = 'inpossível contar, preencha todos os campos!';
        //alert('[ERROR] campos vazios.');
    } else {
        res.innerHTML = 'Contando: <br>';
        let inicio = Number(Inicio.value);
        let f = Number(Fim.value);
        let passo = Number(Passos.value);

        if (passo <= 0){ //nn estou conseguindo fazer com que o valor 0 passe ser considerado 1
            alert('Passo inválido! Considerando passo 1');
            passo = 1
        }
        if(inicio < f ){// contagem crescente
            for (let contador = inicio; contador <= f; contador += passo) {
                res.innerHTML += `${contador} \u{1F449}`
            }
            
        }else{ //contagem regressiva
            for (let contador = inicio; contador >= f; contador -=passo){
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}