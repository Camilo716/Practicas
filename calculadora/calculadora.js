const formulario= document.getElementById('formulario')

function limpiar() {
    formulario.reset();
}

function sumar() {
    let num1= parseInt(document.getElementById('num1').value) ;
    let num2= parseInt(document.getElementById('num2').value);

    document.getElementById('result').innerHTML= num1+num2
}

function restar() {
    let num1= parseInt(document.getElementById('num1').value) ;
    let num2= parseInt(document.getElementById('num2').value);

    document.getElementById('result').innerHTML= num1-num2
}

function multiplicar() {
    let num1= parseInt(document.getElementById('num1').value) ;
    let num2= parseInt(document.getElementById('num2').value);

    document.getElementById('result').innerHTML= num1*num2
}

function dividir() {
    let num1= parseInt(document.getElementById('num1').value) ;
    let num2= parseInt(document.getElementById('num2').value);
    let resultado= num1/num2
    
    if (resultado.toString().length>4) {
        document.getElementById('result').innerHTML = resultado.toString().substring(0, 7);
    } else {
        document.getElementById('result').innerHTML= num1/num2;
    }
}