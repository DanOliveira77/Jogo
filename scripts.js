

console.log("Arquivo script.js está sendo lido");

const btn = document.getElementById("btn");

let numSecreto = Math.random()*10;
numSecreto = Math.floor(numSecreto);

btn.addEventListener("click", function(){

    
    let numEntrada = prompt("Digite um número");

    if (numEntrada < numSecreto) {
        cx.innerHTML = "O número secreto é maior";
        cx.style.backgroundColor = "#FFF"
        
    } else if (numEntrada == numSecreto){
        cx.innerHTML = "<b>XABLAU</b>";
        cx.style.backgroundColor = "Green";
    } else {
        cx.innerHTML = "O número secreto é menor";
        cx.style.backgroundColor = "#FFF";
        
    }

});

let cx = document.getElementById("cx");