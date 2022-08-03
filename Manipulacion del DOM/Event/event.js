const inputLista = document.getElementById('inputList');
const btnButtonLista = document.getElementById('btnButtonLista');
const container = document.getElementById('idContainer');
const lista = document.getElementById('lista');
const ol = document.getElementById('listOrdenada');


btnButtonLista.addEventListener("click", agregarList)
function agregarList() {  
    const li = document.createElement('li');
    li.textContent = inputLista.value;
    li.classList = 'listita';
    ol.append(li);
    inputLista.value = "";
}
/* ol.addEventListener("mouseenter", activaMouse);
function activaMouse(e) {
    ol.style.backgroundColor = "blue";

}
ol.addEventListener("mouseleave", activaMouse);
function activaMouse(e) {
    ol.style.backgroundColor = "pink";
} */

const btnButton = document.getElementById('idButton');
btnButton.addEventListener("click", clicked)
function clicked() {
    alert('Me pinchaste');
}

const idParrafo = document.getElementById('idParrafo');
idParrafo.addEventListener("copy", copiText)
idParrafo.addEventListener("click", clicked)
function copiText() {
    alert("Me estas copiando");
}
const idImg = document.getElementById('idImg');
idImg.addEventListener("drag", draged)
function draged() {
    alert('Me estas arrastrando');
}

const input = document.getElementById('idInput');
input.addEventListener("keydown", copyText)
function copyText() {
    var pText = document.getElementById('pText');
    pText.innerText = input.value; 
}
