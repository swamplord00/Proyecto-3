
export const createGwind = (canvas, data) => {
  let chartV
  
  try {
    if(chartV){
      chartV.destroy()
    }
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

    chartV = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Velocidad del viento',
            data: data.windspeed_10m,
            fill: false,
            borderColor: '#85A5A2',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Fecha',
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 4,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Velocidad del viento',
            },
          },
        },
      },
    });
  
  } catch (error) {
        let alerta = new swal('No se encontro el clima');
        return alerta
  }
};
