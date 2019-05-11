function verificar() {
    let tagSelecionada = document.querySelector("input[type=radio]:checked")
    let selecionado
    
    if(tagSelecionada == null){
        selecionado = null
    }else {
        selecionado = tagSelecionada.value
    }

    if (selecionado == "vermelho") {
        // alert("Pare! Agora...")
        document.querySelector(".img-semaforo").src = "img/vermelho.svg"
    } else if (selecionado == "amarelo") {
        // alert("Run!")
        document.querySelector(".img-semaforo").src = "img/amarelo.svg"
    } else if (selecionado == "verde") {
        // alert("Vai tranquilo!")
        document.querySelector(".img-semaforo").src = "img/verde.svg"
    } else {
        // alert("Só pode estar quebrado!")
        document.querySelector(".img-semaforo").src = "img/apagado.svg"
    }
}