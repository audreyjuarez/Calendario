//Declarar variables dentro de la función para que no esté condicionada por el click.

function clickMe() {
    let dayInput = document.getElementById(`day`).value;
    let monthInput = document.getElementById(`mon`).value;
    let yearInput = document.getElementById(`year`).value;
    let resultOutput = document.getElementById(`result`);

    //If para avisarle al usuario que no puede poner datos fuera de la temporalidad.
    if (yearInput < 1) {
        alert(`Te gati-equivocaste, pon un valor`);
        return;
    }

    if (monthInput < 1 || monthInput >= 13) {
        alert(`Te gati-equivocaste, pon un valor`);
        return;
    }
    //Switch case
    const d = new Date(yearInput, monthInput - 1, dayInput);
    let day = d.getDay();

    switch (day) {
        case 0:
            resultOutput.value = `Domingato, día gati-libre`;
            break;

        case 1:
            resultOutput.value = `Lunes, Día gati-laborable`;
            break;

        case 2:
            resultOutput.value = `Martes, Día gati-laborable`;
            break;

        case 3:
            resultOutput.value = `Miercoles, Día gati-laborable`;
            break;

        case 4:
            resultOutput.value = `Jueves, Día gati-laborable`;
            break;

        case 5:
            resultOutput.value = `Viernes, Día gati-laborable`;
            break;

        case 6:
            resultOutput.value = `Sabado, Día gati-libre`;
            break;

        default:
            break;
    }

}








