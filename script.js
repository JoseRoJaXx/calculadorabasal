const calcular = document.getElementById("calcular");
const error = document.getElementById("error");
const flu = document.getElementById("flu");
const man = document.getElementById("man");

calcular.addEventListener("click", () => {
    const data = document.getElementById("peso").value;
    
    if (data > 0) {
        error.style.display = "none";
        let flujo = calcFlujo(data);
        let mantenimiento = flujo*1.5;
        flu.innerHTML = flujo + " cc/hr";
        man.innerHTML = "m+m/2 " + mantenimiento + " cc/hr";
        flu.style.display = "block";
        man.style.display = "block";
    } else {
        error.style.display = "block";
        flu.style.display = "none";
        man.style.display = "none";
    }
})

function calcFlujo(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto>20) {
        let aux = resto-20;
        flujo += aux*1;
        resto -=aux;
    }
    if (resto>10) {
        let aux = resto-10;
        flujo +=aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}