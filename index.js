function obtenerTamaño() {
    
    tamaño = document.getElementById('tamañotexto').value;
    fontSize =  getComputedStyle(document.documentElement).getPropertyValue('--font-size')
    fontSize  = tamaño
    // al dividir el fontsize entre un numero menor, mas se agranda.
    document.documentElement.style.setProperty('--font-size', `${fontSize/40}`)

}

function obtenerColor() {

    color = document.getElementById('colorresaltado').value

    textos = document.getElementsByTagName("p");
    var i = 0;
    for (i = 0; i < textos.length; i++) {
        textos[i].style.backgroundColor = color;
      }
    console.log(color)

}

