import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { createGHumidity } from './createGHumidity.js';
import { ClearG } from './ClearG.js';
import { createGwind } from './createGraphWind.js';
import { createGtemp } from './createGraphTemp.js';



const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const canvaT= document.getElementById('graficoT');
const canvaH = document.getElementById('graficoH');
const canvaP = document.getElementById('graficoP');
const canvaV = document.getElementById('graficoV');
const checkH=document.getElementById('checkHum');
const checkP=document.getElementById('checkPrec');
const checkW=document.getElementById('checkWind');
const checkT=document.getElementById('checkTemp');
const spinner = document.getElementById('spinner');

let chartArray=[];

const handlerRequest = async () => {
  spinner.classList.remove('hidden');

  if(chartArray){
    ClearG(chartArray);

  }
  console.log(chartArray)

  const respuesta = await makeRequest(input);
  
  const { daily, hourly } = respuesta;
  // console.log(daily);
  console.log(hourly);
  
  // const temperaturaMaxima = daily.temperature_2m_max.replace('T', '');


  const summaryDiv = document.getElementById('resultados');
  summaryDiv.innerHTML = `
    <div class="resumen">
    <h2 class="info">Resumen del clima actual</h2>
    <p class="pTempM">Temp. maxima: ${daily.temperature_2m_max} °C</p>
    <p class="pTempm">Temp. minima: ${daily.temperature_2m_min} °C</p>
    <p class="pPrec">Precipitacion: ${daily.precipitation_sum} mm</p>
    <p class="pWind">Velocidad del viento: ${daily.windspeed_10m_max} Km/h</p>
    </div>
    <div class="resumen">
    <h2 class="info">Pronostico para mañana</h2>
    <p class="pSun">Amanecer: ${daily.sunrise}</p>
    <p class="pSet">Atardecer: ${daily.sunset}</p>
    <p class="pTempM">Temp. maxima: ${daily.apparent_temperature_max}°C</p>
    <p class="pTempm">Temp. minima: ${daily.apparent_temperature_min}°C</p>
    </div>
  `;

  if(checkH.checked){
    chartArray.push(createGHumidity(canvaH,hourly));

  }
  if(checkP.checked){
    chartArray.push(createGraphPrec(canvaP, hourly));

  }
  if(checkT.checked){
    chartArray.push(createGtemp(canvaT,hourly));

  }
  if(checkW.checked){
    chartArray.push(createGwind(canvaV,hourly));

  }

  console.log(chartArray)

  spinner.classList.add('hidden');
};

button.addEventListener('click', handlerRequest);





