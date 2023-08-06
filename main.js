const inpunt_day = document.querySelector('iday');
const inpunt_moth = document.querySelector('imonth');
const inpunt_year = document.querySelector('iyear');

const today = new Date();
const day_atual = today.getDay();
const getMonth_atual = today.getMonth();
const year_atual = today.getFullYear();

function submit() {
    if (inpunt_day == ""){
        error.day("inpunt_day")
    }
    else if (inpunt_day <1 || inpunt_day >31) {
        wrong(inpunt_day)
    }
}


















/*function calyear(){
    var ano = new Date().getFullYear()
    iano.innerHTML = Number(ano) - Number(iyear.value) 
}

function calmon(){
    var mes = new Date().getMonth()
    imes.innerHTML =  Number(imonth.value)-Number(mes) 
}

function calday(){ 
    var dia = new Date().getDay()
    idia.innerHTML = Number(dia) + Number(iday.value)
}*/
        