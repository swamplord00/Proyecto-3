import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { createGHumidity } from './createGHumidity.js';
import { ClearG } from './ClearG.js';
import { createGwind } from './createGraphWind.js';
import { createGtemp } from './createGraphTemp.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const canvaT = document.getElementById('graficoT');
const canvaH = document.getElementById('graficoH');
const canvaP = document.getElementById('graficoP');
const canvaV = document.getElementById('graficoV');
const checkH = document.getElementById('checkHum');
const checkP = document.getElementById('checkPrec');
const checkW = document.getElementById('checkWind');
const checkT = document.getElementById('checkTemp');
const spinner = document.getElementById('spinner');

let chartArray = [];

const handlerRequest = async () => {
  spinner.classList.remove('hidden');

  console.log(chartArray)

  if (chartArray) {
    ClearG(chartArray);
  }
  console.log(chartArray);


  const respuesta = await makeRequest(input);

  const { daily, hourly } = respuesta;
  // console.log(daily);
  console.log(hourly);
  
  // const temperaturaMaxima = daily.temperature_2m_max.replace('T', '');


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

  if (checkH.checked) {
    chartArray.push(createGHumidity(canvaH, hourly));
  }
  if (checkP.checked) {
    chartArray.push(createGraphPrec(canvaP, hourly));
  }
  if (checkT.checked) {
    chartArray.push(createGtemp(canvaT, hourly));
  }
  if (checkW.checked) {
    chartArray.push(createGwind(canvaV, hourly));
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
  console.log(chartArray);

  spinner.classList.add('hidden');
};

button.addEventListener('click', handlerRequest);
