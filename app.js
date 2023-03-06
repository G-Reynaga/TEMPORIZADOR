let dias = 1
let horas = 0
let minutos = 0
let segundos = 0
cargarSegundos()

// Definimos y ejecutamos los segundos
function cargarSegundos(){
    let txtSegundos

    if(segundos < 0 ) {
        segundos = 59
    }

    //Mostrar segundos en la pantalla
    if(segundos < 10){
        txtSegundos = `0${segundos}`
    }else{
        txtSegundos = segundos
    }
    document.getElementById('segundos').innerHTML = txtSegundos
    segundos --
    cargarMinutos(segundos)
}
// Definimos y ejecutamos los minutos
function cargarMinutos(segundos){
    let txtMinutos

    if(segundos === -1 && minutos !== 0){
        setTimeout(() =>{
            minutos--;
        },500)
    }else if (segundos === -1 && minutos === 0){
        setTimeout(() =>{
            minutos = 59;
        },500)
    }

    //Mostrar sminutos en la pantalla
    if(minutos < 10){
        txtMinutos = `0${minutos}`
    }else{
        txtMinutos = minutos
    }
    document.getElementById('minutos').innerHTML = txtMinutos
    cargarHoras(segundos,minutos)
}

// Definimos y ejecutamos las horas
function cargarHoras(segundos,minutos){
    let txtHoras

    if(segundos === -1 && minutos === 0 && horas !== 0){
        setTimeout(()=>{
            horas--;
        },500)
    }else if(segundos === -1 && minutos === 0 && horas === 0){
        setTimeout(()=>{
            horas = 23;
        },500)
    }
    //Mostrar sminutos en la pantalla
    if(horas < 10){
        txtHoras = `0${horas}`
    }else{
        txtHoras = horas
    }
    document.getElementById('horas').innerHTML = txtHoras
    cargarDias(segundos,minutos,horas)
}
// Definimos y ejecutamos las horas
function cargarDias(segundos,minutos,horas){
    let txtDias

    if(segundos === -1 && minutos === 0 && horas === 0 && dias !== 0){
        setTimeout(()=>{
            dias--;
        },500)
    }else if(segundos === -1 && minutos === 0 && horas === 0){
        setTimeout(()=>{
            dias = 1;
        },500)
    }
    //Mostrar sminutos en la pantalla
    if(dias < 10){
        txtDias = `0${dias}`
    }else{
        txtDias = dias
    }
    document.getElementById('dias').innerHTML = txtDias
}


// Ejecutamos cada segundo
setInterval(cargarSegundos, 1000)