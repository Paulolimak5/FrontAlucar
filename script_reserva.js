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
    formData["nome_reserva"] = document.getElementById("nome_reserva").value;
    formData["data_inicio_reserva"] = document.getElementById("data_inicio_reserva").value;
    formData["hora_inicio_reserva"] = document.getElementById("hora_inicio_reserva").value;
    formData["data_final_reserva"] = document.getElementById("data_final_reserva").value;
    formData["hora_fim_reserva"] = document.getElementById("hora_fim_reserva").value;
    formData["cod_carro_reserva"] = document.getElementById("cod_carro_reserva").value;
    formData["unidade_reserva"] = document.getElementById("unidade_reserva").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("lista_reserva").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome_reserva;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.data_inicio_reserva;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.hora_inicio_reserva;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.data_final_reserva;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.hora_fim_reserva;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cod_carro_reserva;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.unidade_reserva;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<button onClick="onEdit(this)" class="btn btn-success">Editar</button>
    <button onClick="onDelete(this)" class="btn btn-danger">Deletar</button>`;
}

function resetForm() {
    document.getElementById("nome_reserva").value = "";
    document.getElementById("data_inicio_reserva").value = "";
    document.getElementById("hora_inicio_reserva").value = "";
    document.getElementById("data_final_reserva").value = "";
    document.getElementById("hora_fim_reserva").value = "";
    document.getElementById("cod_carro_reserva").value = "";
    document.getElementById("unidade_reserva").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome_reserva").value = selectedRow.cells[0].innerHTML;
    document.getElementById("data_inicio_reserva").value = selectedRow.cells[1].innerHTML;
    document.getElementById("hora_inicio_reserva").value = selectedRow.cells[2].innerHTML;
    document.getElementById("data_final_reserva").value = selectedRow.cells[3].innerHTML;
    document.getElementById("hora_fim_reserva").value = selectedRow.cells[4].innerHTML;
    document.getElementById("cod_carro_reserva").value = selectedRow.cells[5].innerHTML;
    document.getElementById("unidade_reserva").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome_reserva;
    selectedRow.cells[1].innerHTML = formData.data_inicio_reserva;
    selectedRow.cells[2].innerHTML = formData.hora_inicio_reserva;
    selectedRow.cells[3].innerHTML = formData.data_final_reserva;
    selectedRow.cells[4].innerHTML = formData.hora_fim_reserva;
    selectedRow.cells[5].innerHTML = formData.cod_carro_reserva;
    selectedRow.cells[6].innerHTML = formData.unidade_reserva;
}

function onDelete(td) {
    if (confirm('Tem certeza que quer deletar esse registro ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("lista_reserva").deleteRow(row.rowIndex);
        resetForm();
    }
}
