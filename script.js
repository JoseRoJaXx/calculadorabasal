let button = document.getElementById("calcular");
button.addEventListener("click", calcular);

function calcular() {
  const imput = document.getElementById("peso");
  const peso = parseInt(imput.value);
  const FLU = document.getElementById("flu");
  const MAN = document.getElementById("man");
  const ERROR = document.getElementById("error");

  FLU.style.display = "none";
  MAN.style.display = "none";
  ERROR.style.display = "none";

  if (!Number.isInteger(peso) || peso <= 0) {
    ERROR.style.display = "block";
    imput.value = "";
    return;
  }


  if (peso <= 30 ) {
    let volumen_diario = hollidaySegar(peso);
    let mantenimiento = Math.round(volumen_diario / 24);
    const MM2 = Math.round(mantenimiento * 1.5);
    console.log(volumen_diario);
    console.log(mantenimiento, MM2);

    FLU.innerHTML = mantenimiento + " cc/hr";
    MAN.innerHTML = "m+m/2: " + MM2 + " cc/hr";
    FLU.style.display = "block";
    MAN.style.display = "block";

  } else {
    const SC1500 = Math.round(superficieCorporal(peso) * 1500);
    const SC2000 = Math.round(superficieCorporal(peso) * 2000);
    FLU.innerHTML = "SC1500: " + SC1500 + " cc/h";
    MAN.innerHTML = "SC2000: " + SC2000 + " cc/h";
    FLU.style.display = "block";
    MAN.style.display = "block";
  }
}

function hollidaySegar(peso) {
  let volumenDiario;
  if (peso <= 10) {
    volumenDiario = peso * 100;
  } else if (peso <= 20) {
    volumenDiario = 1000 + (peso - 10) * 50;
  } else if (peso <= 30) {
    volumenDiario = 1500 + (peso - 20) * 20;
  }
  return volumenDiario;
}

function superficieCorporal(peso) {
  let superficieCorporal = (peso * 4 + 7) / (peso + 90);

  return superficieCorporal/24;
}
