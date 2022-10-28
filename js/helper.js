export function scripting(divAlerta, error, id, mensaje){
    divAlerta.textContent = mensaje;
    divAlerta.classList.add('alerta', 'mx-0', 'my-0');
    error.classList.add('d-flex','justify-content-between');
    error.insertBefore(divAlerta, id.nextElementSibling);
    totalPersona.textContent = '0.00'
    totalPago.textContent = '0.00'
}