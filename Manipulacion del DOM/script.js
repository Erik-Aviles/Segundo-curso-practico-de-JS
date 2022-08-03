const h1 = document.querySelector("h1");
const form1 = document.getElementById('form1')
const input1 = document.getElementById("calcular1");
const input2 = document.getElementById("calcular2");
const btnCalcular1 = document.getElementById('btnCalcular1');


const form2 = document.getElementById('form2')
const input3 = document.getElementById("calcular3");
const input4 = document.getElementById("calcular4");
const btnCalcular2 = document.getElementById('btnCalcular2');


const form3 = document.getElementById('form3')
const input5 = document.getElementById("calcular5");
const input6 = document.getElementById("calcular6");
const btnCalcular3 = document.getElementById('btnCalcular3');

const pResult = document.getElementById('result');



btnCalcular1.addEventListener('click', sumarInputButton);
function sumarInputButton() {
    const h2 = document.createElement('h2');
    h2.textContent = "SOY ROJITO";
    form1.append(h2);
    const sumaImput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaImput; 
    document.bgColor = "red";
    
}

btnCalcular2.addEventListener("click", ejecutaEventoOnclick)
function ejecutaEventoOnclick(){ 
    const h3 = document.createElement('h3')
    h3.textContent = 'SOY VERDECITO';
    form2.append(h3);
    const sumaImput = parseInt(input3.value) + parseInt(input4.value);
    pResult.innerText = "Resultado: " + sumaImput;
    alert(sumaImput);
    document.bgColor = 'green';
} 

btnCalcular3.addEventListener("click", EventoOnclick)
function EventoOnclick(){ 
    const h3 = document.createElement('h3')
    h3.textContent = 'SOY ROSADITO';
    form3.append(h3);
    const sumaImput = parseInt(input5.value) + parseInt(input6.value);
    pResult.innerText = "Resultado: " + sumaImput;
    document.bgColor = 'pink';
} 

//Escuchador de submit
/* form.addEventListener('submit', sumarInputValues);
function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaImput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaImput;
} */


 