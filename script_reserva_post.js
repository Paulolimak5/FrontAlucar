function cadastrarReserva() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let id = document.getElementById("carId").value
  let dataInicio = document.getElementById("data_inicio_reserva").value
  let horaInicio = document.getElementById("hora_inicio_reserva").value
  let dataFim = document.getElementById("data_final_reserva").value
  let horaFim = document.getElementById("hora_fim_reserva").value

  let dtInicio = dataInicio + "T" + horaInicio
  let dtFim = dataFim + "T" + horaFim

  let raw = JSON.stringify({
    "carId": id,
    "finalDate": dtFim,
    "initialDate": dtInicio
  });

  console.log(raw)

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: 'cors'
  };

  fetch("https://alucarjeleven.herokuapp.com/rent-car/save", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    setTimeout(() => {  document.location.reload(true); }, 500);


}