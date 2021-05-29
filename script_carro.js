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
    formData["modelo_carro"] = document.getElementById("modelo_carro").value;
    formData["marca_carro"] = document.getElementById("marca_carro").value;
    formData["nome_carro"] = document.getElementById("nome_carro").value;
    formData["qtd_portas_carro"] = document.getElementById("qtd_portas_carro").value;
    formData["ano_carro"] = document.getElementById("ano_carro").value;
    formData["cor_carro"] = document.getElementById("cor_carro").value;
    formData["qtd_bancos_carro"] = document.getElementById("qtd_bancos_carro").value;
    formData["cambio_carro"] = document.getElementById("cambio_carro").value;
    formData["unidade_carro"] = document.getElementById("unidade_carro").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("lista_carro").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.modelo_carro;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.marca_carro;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nome_carro;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.qtd_portas_carro;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.ano_carro;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cor_carro;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.qtd_bancos_carro;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.cambio_carro;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.unidade_carro;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<button onClick="onEdit(this)" class="btn btn-success">Editar</button>
    <button onClick="onDelete(this)" class="btn btn-danger">Deletar</button>`;
}

function resetForm() {
    document.getElementById("modelo_carro").value = "";
    document.getElementById("marca_carro").value = "";
    document.getElementById("nome_carro").value = "";
    document.getElementById("qtd_portas_carro").value = "";
    document.getElementById("ano_carro").value = "";
    document.getElementById("cor_carro").value = "";
    document.getElementById("qtd_bancos_carro").value = "";
    document.getElementById("cambio_carro").value = "";
    document.getElementById("unidade_carro").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("modelo_carro").value = selectedRow.cells[0].innerHTML;
    document.getElementById("marca_carro").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nome_carro").value = selectedRow.cells[2].innerHTML;
    document.getElementById("qtd_portas_carro").value = selectedRow.cells[3].innerHTML;
    document.getElementById("ano_carro").value = selectedRow.cells[4].innerHTML;
    document.getElementById("cor_carro").value = selectedRow.cells[5].innerHTML;
    document.getElementById("qtd_bancos_carro").value = selectedRow.cells[6].innerHTML;
    document.getElementById("cambio_carro").value = selectedRow.cells[7].innerHTML;
    document.getElementById("unidade_carro").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.modelo_carro;
    selectedRow.cells[1].innerHTML = formData.marca_carro;
    selectedRow.cells[2].innerHTML = formData.nome_carro;
    selectedRow.cells[3].innerHTML = formData.qtd_portas_carro;
    selectedRow.cells[4].innerHTML = formData.ano_carro;
    selectedRow.cells[5].innerHTML = formData.cor_carro;
    selectedRow.cells[6].innerHTML = formData.qtd_bancos_carro;
    selectedRow.cells[7].innerHTML = formData.cambio_carro;
    selectedRow.cells[8].innerHTML = formData.unidade_carro;
}

function onDelete(td) {
    if (confirm('Tem certeza que quer deletar esse registro ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("lista_carro").deleteRow(row.rowIndex);
        resetForm();
    }
}
