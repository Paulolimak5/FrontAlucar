var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["nome_usuario"] = document.getElementById("nome_usuario").value;
    formData["cpf_cnpj_usuario"] = document.getElementById("cpf_cnpj_usuario").value;
    formData["dt_nasc_usuario"] = document.getElementById("dt_nasc_usuario").value;
    formData["end_usuario"] = document.getElementById("end_usuario").value;
    formData["num_end_usuario"] = document.getElementById("num_end_usuario").value;
    formData["bairro_usuario"] = document.getElementById("bairro_usuario").value;
    formData["cep_usuario"] = document.getElementById("cep_usuario").value;
    formData["municipio_usuario"] = document.getElementById("municipio_usuario").value;
    formData["estado_carro"] = document.getElementById("estado_carro").value;
    formData["tel_usuario"] = document.getElementById("tel_usuario").value;
    formData["cel_usuario"] = document.getElementById("cel_usuario").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("lista_usuario").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome_usuario;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cpf_cnpj_usuario;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dt_nasc_usuario;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.end_usuario;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.num_end_usuario;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.bairro_usuario;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.cep_usuario;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.municipio_usuario;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.estado_carro;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.tel_usuario;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.cel_usuario;

    cell12 = newRow.insertCell(11);
    cell12.innerHTML = `<button onClick="onEdit(this)" class="btn btn-success">Editar</button>
    <button onClick="onDelete(this)" class="btn btn-danger">Deletar</button>`;
}

function resetForm() {
    document.getElementById("nome_usuario").value = "";
    document.getElementById("cpf_cnpj_usuario").value = "";
    document.getElementById("dt_nasc_usuario").value = "";
    document.getElementById("end_usuario").value = "";
    document.getElementById("num_end_usuario").value = "";
    document.getElementById("bairro_usuario").value = "";
    document.getElementById("cep_usuario").value = "";
    document.getElementById("municipio_usuario").value = "";
    document.getElementById("estado_carro").value = "";
    document.getElementById("tel_usuario").value = "";
    document.getElementById("cel_usuario").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome_usuario").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cpf_cnpj_usuario").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dt_nasc_usuario").value = selectedRow.cells[2].innerHTML;
    document.getElementById("end_usuario").value = selectedRow.cells[3].innerHTML;
    document.getElementById("num_end_usuario").value = selectedRow.cells[4].innerHTML;
    document.getElementById("bairro_usuario").value = selectedRow.cells[5].innerHTML;
    document.getElementById("cep_usuario").value = selectedRow.cells[6].innerHTML;
    document.getElementById("municipio_usuario").value = selectedRow.cells[7].innerHTML;
    document.getElementById("estado_carro").value = selectedRow.cells[8].innerHTML;
    document.getElementById("tel_usuario").value = selectedRow.cells[9].innerHTML;
    document.getElementById("cel_usuario").value = selectedRow.cells[10].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome_usuario;
    selectedRow.cells[1].innerHTML = formData.cpf_cnpj_usuario;
    selectedRow.cells[2].innerHTML = formData.dt_nasc_usuario;
    selectedRow.cells[3].innerHTML = formData.end_usuario;
    selectedRow.cells[4].innerHTML = formData.num_end_usuario;
    selectedRow.cells[5].innerHTML = formData.bairro_usuario;
    selectedRow.cells[6].innerHTML = formData.cep_usuario;
    selectedRow.cells[7].innerHTML = formData.municipio_usuario;
    selectedRow.cells[8].innerHTML = formData.estado_carro;
    selectedRow.cells[9].innerHTML = formData.tel_usuario;
    selectedRow.cells[10].innerHTML = formData.cel_usuario;
}

function onDelete(td) {
    if (confirm('Tem certeza que quer deletar esse registro ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("lista_usuario").deleteRow(row.rowIndex);
        resetForm();
    }
}
