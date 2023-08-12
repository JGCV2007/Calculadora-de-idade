const button = document.querySelector('button')
const input_day = document.querySelector('iday');
const input_month = document.querySelector('imonth');
const input_year = document.querySelector('iyear');
const error_day = document.querySelector('error.day')
const wrong_day = document.querySelector('wrong.day')
const error_month = document.querySelector('error.month')
const wrong_month = document.querySelector('wrong.month')
const error_year = document.querySelector('error.year')
const wrong_year = document.querySelector('wrong.year')
const today = new Date();
const day_atual = today.getDay();
const Month_atual = today.getMonth();
const year_atual = today.getFullYear();

function calyear(){
    if (input_year === "") {
     error_year.style.display = "block"
    }
    else if (input_year <0 || input_year > year_atual) {
    wrong_year.style.display = "block"
    }
}
function calmon(){
    if (input_month === "") {
    error_month.style.display = "block"
    }
    else if (input_month <1 || input_month >12) {
     wrong_month.style.display = "block"
    }
}
function calday(){
    if (input_day === ""){
     error_day.style.display = "block"
    }
    else if (input_day <1 || input_day >31) {
    wrong_day.style.display = "block"
}
}


 // selecionar output e terminar calculos










 //button.addEventListener



/*function calyear(){ oninput="calyear()"
    var ano = new Date().getFullYear()
    iano.innerHTML = Number(ano) - Number(iyear.value) 
}

function calmon(){ oninput="calmon()" 
    var mes = new Date().getMonth()
    imes.innerHTML =  Number(imonth.value)-Number(mes) 
}

function calday(){ oninput="calday()" 
    var dia = new Date().getDay()
    idia.innerHTML = Number(dia) + Number(iday.value)
}*/
//error_day("inpunt_day")
//wrong_day("inpunt_day")
        