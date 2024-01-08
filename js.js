

function dame_cambio() {
  let valor_input = document.getElementById("input_monedas").value;
  let cent = 0;
  let img_monedas = "";

  if (parseFloat(valor_input) != "NaN") { // es numero
    cent = valor_input * 100; // convierto en centimos
    
    while (true) {
        if (cent >= 200) {
            img_monedas = img_monedas + "<img src='200.png'>";
            cent -= 200;
        } else if (cent >= 100) {
            img_monedas = img_monedas + "<img src='100.png'>";
            cent -= 100;
        } else if (cent >= 50) {
            img_monedas = img_monedas + "<img src='50.png'>";
            cent -= 50;
        } else if (cent >= 20) {
            img_monedas = img_monedas + "<img src='20.png'>";
            cent -= 20;
        } else if (cent >= 10) {
            img_monedas = img_monedas + "<img src='10.png'>";
            cent -= 10;
        } else if (cent >= 5) {
            img_monedas = img_monedas + "<img src='5.png'>";
            cent -= 5;
        } else if (cent >= 2) {
            img_monedas = img_monedas + "<img src='2.png'>";
            cent -= 2;
        } else if (cent >= 1) {
            img_monedas = img_monedas + "<img src='1.png'>";
            cent -= 1;
        } else {
            break;
        }
    }
    document.getElementById("cambio").innerHTML = img_monedas; // meto monedas en html
  }
    
}