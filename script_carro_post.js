function cadastrarCarro() {

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

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    mode: 'cors',
    redirect: 'follow'
  };

  fetch("https://alucarjeleven.herokuapp.com/car/save", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    setTimeout(() => {  document.location.reload(true); }, 500);

}




  






