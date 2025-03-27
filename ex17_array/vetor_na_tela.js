let valores = [8, 1, 7, 4, 2, 9, 10, 15]
//com simplificação do for in
for (let pos in valores) {
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}

//versão tradicional
/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/