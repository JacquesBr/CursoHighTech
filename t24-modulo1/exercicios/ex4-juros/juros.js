function jurosSimples() {

    let capital = parseFloat(document.getElementById("capital").value)
    let juros = parseFloat(document.getElementById("juros").value)
    let tempo = parseFloat(document.getElementById("tempo").value)

    let resultado = (capital * juros/100 * tempo) + capital;
    alert("O total a ser pago é: " + resultado)

}

function jurosComposto(){

    let capital = parseFloat(document.getElementById("capital").value)
    let juros = parseFloat(document.getElementById("juros").value)
    let tempo = parseFloat(document.getElementById("tempo").value)

    let potencia = Math.pow(( 1 + (juros/100)),tempo)
    let resultado = (capital * potencia).toFixed(2);
    alert("O total a ser pago é: " + resultado)

}