document.querySelector('div').addEventListener(click, saludarDiv);
function saludarBoton() {
    alert("Hola")
    event.stopPropagation();
}
function saludarDiv() {
    alert("Hola! Soy el div");
}

