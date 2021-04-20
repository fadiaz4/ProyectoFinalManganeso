var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["correlativob"] = document.getElementById("correlativob").value;
    formData["nombreb"] = document.getElementById("nombreb").value;
    formData["preciob"] = document.getElementById("preciob").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("trajedebañoslista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.correlativob;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nombreb;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.preciob;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = <a onClick="onEdit(this)" type="button">Editar</a>;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = <a onClick="onDelete(this)">Eliminar</a>;
}

function resetForm() {
    document.getElementById("correlativob").value = "";
    document.getElementById("nombreb").value = "";
    document.getElementById("preciob").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("correlativob").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nombreb").value = selectedRow.cells[1].innerHTML;
    document.getElementById("preciob").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.correlativob;
    selectedRow.cells[1].innerHTML = formData.nombreb;
    selectedRow.cells[2].innerHTML = formData.preciob;
}

function onDelete(td) {
    if (confirm('Está seguro de querer elimnar este elemento?')) {
        row = td.parentElement.parentElement;
        document.getElementById("trajedebañoslista").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombreb").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}