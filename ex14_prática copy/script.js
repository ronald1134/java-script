function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){
        img.src = 'image/foto_manhã.jpg'
    }else if (hora >= 12 && hora <17){
        img.src = 'image/foto_tarde.jpg'
    }else{
        img.src = 'image/foto_noite.jpg'
    }
}

