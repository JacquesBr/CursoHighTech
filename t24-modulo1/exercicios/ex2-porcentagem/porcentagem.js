function calcular () {

    // Pegar os valores dos input's
    let porcentagem = parseFloat(document.getElementById("porcentagem").value)
    let valor = parseFloat(document.getElementById("valor").value)
    
    // Calcular
    let resultado = porcentagem/100 * valor
    alert("O resultado é: " + resultado);

}