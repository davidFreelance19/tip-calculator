const formulario =  document.querySelector('#agregar-gasto');
const porcentaje = document.querySelector('.form-procentaje');
const totalPersona =  document.querySelector('#total-persona');
const totalPago =  document.querySelector('#total-pagar');
const btn = document.querySelector('.div-button button');

let identificador, id;

formulario.addEventListener('input', agregarGasto);
function agregarGasto(e){
    identificador = Number(document.querySelector(`#${e.target.id}`).value);
    id = e.target.id;
    validacion(identificador, id);
    btn.addEventListener('click', btnReset)
}

function validacion(identificador, id){
    if( identificador === 0 || identificador === ''){
        imprimirAlerta("Can't be zero", 'error', id);
    }else if (isNaN(identificador) || identificador < 0){
        imprimirAlerta('invalid value', 'error', id);
    }else{
        btn.classList.remove('b-desactive');
        btn.classList.add('active');
        imprimirResultado();
    }
}

function imprimirAlerta(mensaje, tipo, id){
    btn.classList.add('b-desactive');
    btn.classList.remove('active');
    const alerta = document.querySelector('.alerta');
    if(alerta){
        alerta.remove();
    }
    const error = document.querySelector(`.${id}-error`)
    const divAlerta = document.createElement('p');
    if(tipo === 'error'){
        divAlerta.textContent = mensaje;
        divAlerta.classList.add('alerta', 'mx-0', 'my-0');
        error.classList.add('d-flex','justify-content-between');
        error.insertBefore(divAlerta, id.nextElementSibling);
        totalPersona.textContent = '0.00'
        totalPago.textContent = '0.00'
    }
    setTimeout(() => {
        divAlerta.remove()
    }, 1000);
}

function imprimirResultado(){
    let gastado = Number(document.querySelector('#gasto').value)
    let personas = Number(document.querySelector('#personas').value)
    let custom =  Number(document.querySelector('#custom').value);
    let tipAmount = ((gastado/personas)*custom ) / 100
    let totalPagar = tipAmount + (gastado/personas);
    validacionTotal(tipAmount, totalPagar);
    porcentaje.addEventListener('click', e => { 
       let tipAmount = ( (gastado/personas) * Number(e.target.value) ) / 100
       let totalPagar = tipAmount + (gastado/personas);
       validacionTotal(tipAmount, totalPagar)
    } ) 
}


function validacionTotal(tipAmount, totalPagar){
    if(isNaN(tipAmount) || !isFinite(tipAmount)){
        totalPersona.textContent = '0.00'
        totalPago.textContent = '0.00'
    }else{
        totalPersona.textContent = tipAmount.toFixed(2);
        totalPago.textContent = totalPagar.toFixed(2);
    }
}
function btnReset(){
    formulario.reset();
    btn.classList.add('b-desactive');
    btn.classList.remove('active');
    totalPersona.textContent = '0.00'
    totalPago.textContent = '0.00'
}