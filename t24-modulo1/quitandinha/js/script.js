let cesta = []
let quantidadeCesta

function adicionarCesta(produto) {
    cesta.push(produto)

    alert("Sua cesta contém: " + cesta.toString())
    localStorage.setItem("cesta", JSON.stringify(cesta))
    carregarCesta()
}

function carregarCesta() {
    cesta = JSON.parse(localStorage.getItem("cesta"))
        // atualizar número na tela
        // pegar o span
        // atualizar valor do span
    if (document.getElementById("quantidadeCesta") != null) {
        document.getElementById("quantidadeCesta").innerHTML = cesta.length
    }
}

function listarCesta() {
    carregarCesta()
    let lista = document.getElementById("listaCesta")
    for (let i = 0; i < cesta.length; i++) {
        // alert(cesta[i])
        // Colocar os itens da cesta no HTML
        let div = document.createElement("div")
        div.classList.add("item-cesta")


        // criar span
        let span = document.createElement("span")
        span.innerHTML = cesta[i]
        div.appendChild(span)


        // criar botao
        let button = document.createElement("button")
        button.innerHTML = "Remover"
        button.classList.add("btn")
        button.classList.add("remover")

        div.appendChild(button)

        lista.appendChild(div)

    }
}