import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { createGHumidity } from './createGHumidity.js';
import { ClearG } from './ClearG.js';
import { createGwind } from './createGraphWind.js';
import { createGtemp } from './createGraphTemp.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const checkH = document.getElementById('checkHum');
const checkP = document.getElementById('checkPrec');
const checkW = document.getElementById('checkWind');
const checkT = document.getElementById('checkTemp');
const spinner = document.getElementById('spinner');
const contenedor=document.getElementById('contenedorGrafico')


const handlerRequest = async () => {
 
  
  spinner.classList.remove('hidden');
  
  
  const respuesta = await makeRequest(input);
  
  
  const { daily, hourly } = respuesta;
  // console.log(daily);
  console.log(hourly);
  
  // const temperaturaMaxima = daily.temperature_2m_max.replace('T', '');
  drawcanvas(hourly)
  
  const summaryDiv = document.getElementById('resultados');
  summaryDiv.innerHTML = `
  <h2>Resumen del clima actual</h2>
  <p>Temperatura maxima: ${daily.temperature_2m_max}</p>
  <p>Temperatura minima: ${daily.temperature_2m_min}</p>
  <p>Precipitacion: ${daily.precipitation_sum}</p>
  <p>Velocidad del viento: ${daily.windspeed_10m_max}</p>
  
  <h2>Pronostico para el día de mañana</h2>
  <p>Amanecer: ${daily.sunrise}</p>
  <p>Atardecer: ${daily.sunset}</p>
  <p>Temperatura maxima: ${daily.apparent_temperature_max}</p>
  <p>Temperatura minima: ${daily.apparent_temperature_min}</p>
  `;
  
 
  spinner.classList.add('hidden');
};

button.addEventListener('click', handlerRequest);


const drawcanvas=(hourly)=>{
  let canvaH, canvaP,canvaV,canvaT;
  console.log(canvaH, canvaP,canvaT,canvaV)


  if (checkH.checked) {
    
    canvaH = document.getElementById('graficoH');
    console.log(contenedor)
    console.log(canvaH)
    createGHumidity(canvaH, hourly);
    
    
  }
  if (checkP.checked) {
    
    canvaP = document.getElementById('graficoP');
    console.log(contenedor)
    console.log(canvaP)
    createGraphPrec(canvaP, hourly);
    
    
  }
  if (checkT.checked) {
    
    canvaT = document.getElementById('graficoT');
    console.log(contenedor)
    console.log(canvaT)
    createGtemp(canvaT, hourly);
  }
  if (checkW.checked) {
    
    canvaV = document.getElementById('graficoV');
    console.log(contenedor)
    console.log(canvaV)
    createGwind(canvaV, hourly);
  }
  if (
    (checkP.checked === false) &
    (checkH.checked === false) &
    (checkT.checked === false) &
    (checkW.checked === false)
    ) {
      let alerta = new swal('Ningun grafico fue selecionado');
      return alerta;
    }
    console.log(contenedor)
    console.log(canvaH, canvaP,canvaT,canvaV)
}


checkH.addEventListener('change',function(e){
  if(checkH.checked){
    console.log(contenedor)
    contenedor.innerHTML+="<canvas id='graficoH'></canvas>"

  }else{
    document.getElementById('graficoH').remove()
  }
})
checkT.addEventListener('change',function(e){
  if(checkT.checked){
    contenedor.innerHTML+="<canvas id='graficoT'></canvas>"
  }else{
    document.getElementById('graficoT').remove()
  }
})
checkP.addEventListener('change',function(e){
  if(checkP.checked){
    contenedor.innerHTML+="<canvas id='graficoP'></canvas>"
  }else{
    document.getElementById('graficoP').remove()
  }
})
checkW.addEventListener('change',function(e){
  if(checkW.checked){
    contenedor.innerHTML+="<canvas id='graficoV'></canvas>"
  }else{
    document.getElementById('graficoV').remove()
  }
})