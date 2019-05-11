
function verificaParidade() {
    // Pegar dados
    let valor = parseFloat(document.getElementById("numero").value)

    // Verificar paridade
    if(valor % 2 == 0){
        alert("O número é par")
    } else {
        alert("O número é ímpar")
    }
}