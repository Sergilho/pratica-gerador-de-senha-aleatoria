const inputSenha = document.getElementById('inputSenha');
const lenInput = document.getElementById('inputRange');
const infoLen = document.getElementById('label[for="labelLenghtId"]');
const btnGerar = document.getElementById('btn');

const checkLetraMinus = document.getElementById('checkLetraMinus');
const checkLetraMaius = document.getElementById('checkLetraMaius');
const checkNumeros = document.getElementById('checkNumeros');
const checkSimbolos = document.getElementById('checkSimbolos');

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolos = ["!", "@", "#", "$", "%", "&"];
const letrasMinus = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const letrasMaius = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

infoLen.innerHTML = lenInput.value;
lenInput.addEventListener("change", () => {
    infoLen.innerHTML = lenInput.value;
})