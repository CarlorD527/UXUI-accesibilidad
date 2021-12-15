function obtenerTamaño() {
    var fontSize = 12;
    tamaño = document.getElementById('tamañotexto').value;
    fontSize =  getComputedStyle(document.documentElement).getPropertyValue('--font-size')
    fontSize  = tamaño
    document.documentElement.style.setProperty('--font-size', `${fontSize/50}`)

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

