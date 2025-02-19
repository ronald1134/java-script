function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){
        img.src = 'image/foto_manhã.jpg'
        document.body.style.background = '#74a7d4'
    }else if (hora >= 12 && hora <19){
        img.src = 'image/foto_tarde.jpg'
        document.body.style.background = '#e8a65a'
    }else{
        img.src = 'image/foto_noite.jpg'
        document.body.style.background = '#273119'
    }
}

//cores (manhã #74a7d4)
//cores (tarde #e8a65a)
//cores (noite #273119)