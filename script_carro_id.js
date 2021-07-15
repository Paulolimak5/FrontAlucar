const key = document.querySelector("#key")
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]

        }
    }
}

key.addEventListener("blur", (e)=>{
    let idcar = key.value;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://alucarrjsexteen.azurewebsites.net/car/${idcar}`, options)
    .then(response=>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})

//-----------------------------Tesde de Delete------------------------------------------
var form = document.getElementById("cad_carro");
document.getElementById("delete_button").addEventListener("click", function () {

    let idcar = key.value;
    const optionsDelete = {
        method: 'DELETE',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://alucarrjsexteen.azurewebsites.net/car/delete/${idcar}`, optionsDelete)
    .then(res => res.text())
    .then(res => console.log("deletado"))
});


