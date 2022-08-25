function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var  img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebehomem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.jpeg')
            } else if (idade < 50){
                //Aduto
                img.setAttribute('src', 'adultohomem.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemulher.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.jpeg')
            } else if (idade < 50){
                //Aduto
                img.setAttribute('src', 'adultomulher.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'idosomulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.style.fontSize = '20pt'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img )
    }
}
 