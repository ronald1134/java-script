function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form = document.getElementById('txtano')
    var res = document.getElementById('resultado')

    if (form.value.length == 0 || Number(form.value) > ano) {
        alert('[ERROR] Verifque os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(form[0].checked){
            genero = 'homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'image/bebe_m.jpg')
            }else if(idade <20){
                //jovem
                img.setAttribute('src', 'image/jovem_m.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'image/adulto_m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'image/idoso_m.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}