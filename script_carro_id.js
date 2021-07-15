const key = document.querySelector("#key")
const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]

        }
    }
}

key.addEventListener("blur", (e) => {
    let idcar = key.value;
    const options = {
        method: 'GET',
        mode: 'cors'
    }
    fetch(`https://alucarjeleven.herokuapp.com/car/${idcar}`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log('Deu Erro: ' + e, message))
})

//-----------------------------Delete------------------------------------------
function deletarCarro() {
    let id = document.querySelector("#key")
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(`https://alucarjeleven.herokuapp.com/car/delete/${id.value}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

//-----------------------------Update------------------------------------------
function editarCarro() {
    let id = document.querySelector("#key")
    let idcar = id.value

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let nome = document.getElementById("name").value
    let tipo = document.getElementById("type").value
    let marca = document.getElementById("model").value
    let qtd_portas = document.getElementById("portQuantity").value
    let ano_veiculo = document.getElementById("year").value
    let cor = document.getElementById("color").value
    let qtd_bancos = document.getElementById("seatsQuantity").value
    let cambio = document.getElementById("shift").value
    let valor = document.getElementById("rentValue").value
    let alugado = document.getElementById("isRented").value

    var myBool

    if (alugado == "true") {
        myBool = Boolean(alugado);
    } else {
        myBool = Boolean(!alugado);
    }

    let raw = JSON.stringify({
        "name": nome,
        "type": tipo,
        "model": marca,
        "portQuantity": Number.parseInt(qtd_portas),
        "year": Number.parseInt(ano_veiculo),
        "color": cor,
        "seatsQuantity": Number.parseInt(qtd_bancos),
        "shift": cambio,
        "rentValue": Number.parseFloat(valor),
        "isRented": myBool
    });

    var requestOptions1 = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`https://alucarjeleven.herokuapp.com/car/update/${idcar}`, requestOptions1)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
