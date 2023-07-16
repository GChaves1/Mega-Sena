const apostate = [];
const result = [];
let valorAposta = 0;
let qtdAcertos = 0;

const brnApostar = document.getElementById("btnApostar");
btnApostar.disabled = true;

sortearNumeros()

// Get the theme toggle input
const themeToggle = document.querySelector(
  '.switch input[type="checkbox"]'
);
// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
// Add an event listener to the theme toggle, which will switch the theme
themeToggle.addEventListener("change", switchTheme, false);

// Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");
// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);
// If the current theme is dark, check the theme toggle
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}

function sortearNumeros(){

  //sorteando os numeros do jogo
  for(i = 0; i < 6; i++){
    
    let numeroSorteado = Math.round(Math.random() * 59 + 1);

    //verifica numeros. Caso exista sortea novo numero
    while(result.includes(numeroSorteado)){
      let numeroSorteado = Math.round(Math.random() * 59 + 1);
    }
    result.push(numeroSorteado); //aplica numero na lista
    
  }
}

function selectNumbers(number){

  if(apostate.length >= 0 && apostate.length < 15){
    apostate.push(number)
    

    //desabilita numero selecionado
    disableNumber(number);

    //habilita botao de aposta
    if(apostate.length > 5){
      btnApostar.disabled = false;

      // mostra o valor da aposta
      valorDaAposta();
    }

    // mostrar quantidade de numeros apostados
     const qtdNumeros = document.getElementById("qtdNumeros")
     qtdNumeros.innerHTML = "<p>Qtd Números</p><p class='valor'>" + apostate.length + "</p>";
  }
}

function disableNumber(number){
  document.getElementById("num_" + number).disabled = true;
  document.getElementById("num_" + number).style.background = "#009e4c"
  document.getElementById("num_" + number).style.color = "#ffffff"
}

function valorDaAposta(){
  switch(apostate.length){
    case 6:
      valorAposta = "R$ 4,50"
      break;
    case 7:
      valorAposta = "R$ 31,50"
      break;
    case 8:
      valorAposta = "R$ 126,00"
      break;
    case 9:
      valorAposta = "R$ 378,00"
      break;
    case 10:
      valorAposta = "R$ 945,00"
      break;
    case 11:
      valorAposta = "R$ 2.079,00"
      break;
    case 12:
      valorAposta = "R$ 4.158,00"
      break;
    case 13:
      valorAposta = "R$ 6.006,00"
      break;
    case 14:
      valorAposta = "R$ 10.510,00"
      break;
    case 15:
      valorAposta = "R$ 17.510,50"
      break;
    default:
      valorAposta = "R$ 0,00"
      break;    
  } 
  const divValorAposta = document.getElementById("valor");
  divValorAposta.innerHTML = "<p>Valor da Aposta</p><p class='valor'>" + valorAposta + "</p>"
}

function apostar(){
  //realizar aposta
  for( i = 0; i < apostate.length; i++){
      if(result.includes(apostate[i])){
        qtdAcertos++;
      }
    //   for( j = 0; j < result.length; j++){
    // }
  }
  //apresenta resultado

  const divResultado = document.getElementById("resultado");
  for(i = 0; i < result.length; i++){
    divResultado.innerHTML += "<div class='resultadoCircle'>"+ result[i] +"</div>"
  }

  //quantidade de acertos
  let divAcertos = document.getElementById("acertos");
  divAcertos.innerHTML = "<p>Acertos</p><p class='valor'>" + qtdAcertos + "</p>"

  //desabilita botões
  desabilitarTodosNumeros();

  //habilitar reset
  document.getElementById("btnReset").style.display ='inline';
}

function desabilitarTodosNumeros(){
  for(i = 1; i <= 60; i++){
    document.getElementById("num_"+ i).disabled = true;
  }
}

let btn = document.querySelector("#btnReset");
btn.addEventListener("click", function(){
  location.reload();
});

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    
    // Set the user's theme preference to dark
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    
    // Set the user's theme preference to light
    localStorage.setItem("theme", "light");
  }
}