function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastrarCarro(){
    event.preventDefault()
    let url = "https://alucarrjsexteen.azurewebsites.net/cars"
    let nome = document.getElementById("name").value
    let tipo = document.getElementById("type").value
    let marca = document.getElementById("modelo").value
    let qtd_portas = document.getElementById("portQuantity").value
    let ano_veiculo = document.getElementById("year").value
    let cor = document.getElementById("color").value
    let qtd_bancos = document.getElementById("seatsQuantity").value
    let cambio = document.getElementById("shift").value
    let valor = document.getElementById("rentValue").value

    body = {
        "name": nome,
        "type": tipo,
        "modelo": marca,
        "portQuantity": qtd_portas,
        "year": ano_veiculo,
        "color": cor,
        "seatsQuantity": qtd_bancos,
        "shift": cambio,
        "rentValue": valor
    }

    fazPost(url, body)
}