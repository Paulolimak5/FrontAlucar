function main(){
    var myHeaders1 = new Headers();
    myHeaders1.append("Content-Type", "application/json");
    myHeaders1.append("Accept", "application/json");
    var raw = JSON.stringify({});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders1,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://alucarrjsexteen.azurewebsites.net/car/list?page=0&size=10", requestOptions)
    .then(function(response){
        return response.json();
      })
      .then(function(data){
          //console.log(data.content[1])
          forUser(data.content)
      });
}

function forUser(data){
    let usuarios = data;//JSON.parse(data);
    let tabela = document.getElementById("tabela");
  
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main();

function criaLinha(usuario){
    linha = document.createElement("tr");
    tdKey = document.createElement("td");
    tdModelo = document.createElement("td");
    tdNome = document.createElement("td");
    tdAno = document.createElement("td");
    tdTipo = document.createElement("td");
    tdBancos = document.createElement("td");
    tdPortas = document.createElement("td");
    tdColor = document.createElement("td");
    tdCambio = document.createElement("td");
    tdValor = document.createElement("td");
    tdAlugado = document.createElement("td");
    
    tdKey.innerHTML = usuario.key
    tdModelo.innerHTML = usuario.modelo
    tdNome.innerHTML = usuario.name
    tdAno.innerHTML = usuario.year
    tdTipo.innerHTML = usuario.type
    tdBancos.innerHTML = usuario.seatsQuantity
    tdPortas.innerHTML = usuario.portQuantity
    tdColor.innerHTML = usuario.color
    tdCambio.innerHTML = usuario.shift
    tdValor.innerHTML = usuario.rentValue
    tdAlugado.innerHTML = usuario.isRented
    
    linha.appendChild(tdKey);
    linha.appendChild(tdModelo);
    linha.appendChild(tdNome);
    linha.appendChild(tdAno);
    linha.appendChild(tdTipo);
    linha.appendChild(tdBancos);
    linha.appendChild(tdPortas);
    linha.appendChild(tdColor);
    linha.appendChild(tdCambio);
    linha.appendChild(tdValor);
    linha.appendChild(tdAlugado);

    return linha;
}