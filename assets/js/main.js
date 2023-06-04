import { makeRequest } from './request.js';
import { createGraphPrec } from './createGraphPrec.js';
import { createGHumidity } from './createGHumidity.js';
import { createGwind } from './createGraphWind.js';
import { createGtemp } from './createGraphTemp.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');
const checkH = document.getElementById('checkHum');
const checkP = document.getElementById('checkPrec');
const checkW = document.getElementById('checkWind');
const checkT = document.getElementById('checkTemp');
const spinner = document.getElementById('spinner');
const contenedor = document.getElementById('contenedorGrafico');

const handlerRequest = async () => {
  spinner.classList.remove('hidden');
 

  const respuesta = await makeRequest(input);

  const { daily, hourly } = respuesta;


  drawcanvas(hourly);

  const summaryDiv = document.getElementById('resultados');
  summaryDiv.innerHTML = `
    <div class="resumen">
    <h2 class="info">Resumen del clima actual</h2>
    <div class="cards">
    <p href="#"  class="pTempM">Temp. maxima: ${daily.temperature_2m_max} °C</p>
    <p class="pTempm">Temp. minima: ${daily.temperature_2m_min} °C</p>
    <p class="pPrec">Precipitacion: ${daily.precipitation_sum} mm</p>
    <p class="pWind">Velocidad del viento: ${daily.windspeed_10m_max} Km/h</p>
    </div>
    </div>
    <div class="resumen">
    <h2 class="info">Pronostico para mañana</h2>
    <div class="cards">
    <p class="pSun">Amanecer: ${daily.sunrise}</p>
    <p class="pSet">Atardecer: ${daily.sunset}</p>
    <p class="pTempM">Temp. maxima: ${daily.apparent_temperature_max}°C</p>
    <p class="pTempm">Temp. minima: ${daily.apparent_temperature_min}°C</p>
    </div>
    </div>
  `;

  checkH.checked=false
  checkP.checked=false
  checkT.checked=false
  checkW.checked=false
  spinner.classList.add('hidden');
};

button.addEventListener('click', handlerRequest);

const drawcanvas = (hourly) => {
  let canvaH, canvaP, canvaV, canvaT;

  if (checkH.checked) {
    canvaH = document.getElementById('graficoH');
    createGHumidity(canvaH, hourly);
  }
  if (checkP.checked) {
    canvaP = document.getElementById('graficoP');
    createGraphPrec(canvaP, hourly);
  }
  if (checkT.checked) {
    canvaT = document.getElementById('graficoT');
    createGtemp(canvaT, hourly);
  }
  if (checkW.checked) {
    canvaV = document.getElementById('graficoV');
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

};

checkH.addEventListener('change', function (e) {
  if (checkH.checked) {
    contenedor.innerHTML += "<canvas id='graficoH'></canvas>";
  } else {
    document.getElementById('graficoH').remove();
  }
});
checkT.addEventListener('change', function (e) {
  if (checkT.checked) {
    contenedor.innerHTML += "<canvas id='graficoT'></canvas>";
  } else {
    document.getElementById('graficoT').remove();
  }
});
checkP.addEventListener('change', function (e) {
  if (checkP.checked) {
    contenedor.innerHTML += "<canvas id='graficoP'></canvas>";
  } else {
    document.getElementById('graficoP').remove();
  }
});
checkW.addEventListener('change', function (e) {
  if (checkW.checked) {
    contenedor.innerHTML += "<canvas id='graficoV'></canvas>";
  } else {
    document.getElementById('graficoV').remove();
  }
});
