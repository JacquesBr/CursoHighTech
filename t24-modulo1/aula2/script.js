function logar(){

    // Declarando variáveis
    let usuario
    let senha

    // Atribuição
    usuario = document.getElementById("usuario").value
    senha = document.getElementById("senha").value

    if(!usuario || !senha){
        alert("Preencha os campos!")
    }

    // Print
    // alert(senha + " " + usuario)
}