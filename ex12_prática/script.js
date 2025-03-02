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
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute("style", "border-radius: 50%; object-fit: cover; width: 200px; height: 200px; object-position: center top;");
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'image/bebe_m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'image/jovem_m.jpeg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'image/adulto_m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'image/idoso_m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'image/bebe_f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'image/jovem_f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'image/adulto_f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'image/idoso_f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
        res.appendChild(img)
    }
}