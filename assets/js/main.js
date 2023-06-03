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

 
  ClearG(chartArray);

  
  console.log(chartArray)

  const respuesta = await makeRequest(input);
  
  const { daily, hourly } = respuesta;
  // console.log(daily);
  console.log(hourly);

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





