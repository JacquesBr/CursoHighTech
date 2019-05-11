
function repeticao() {
    
    let cont = 0
    // ler o máximo digitado pelo usuário
    let maximo = document.getElementById("maximo").value

    while(cont < maximo) { 
        cont++
        alert("Opa, looping na área, cont é: " + cont)
    }
}

function repeticaoFor() {

    // ler o máximo digitado pelo usuário
    let maximo = document.getElementById("maximo").value

    for (let cont = 0; cont < maximo; cont++) {
        alert("Opa, looping for na área, cont é: " + cont)
    }

}