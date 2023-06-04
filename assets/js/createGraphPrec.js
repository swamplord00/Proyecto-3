
export const createGraphPrec = (canvas, data) => {
  let chartP
  try {
    if(chartP){
      chartP.destroy()
    }
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

    chartP = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Precipitación',
            data: data.precipitation,
            fill: false,
            borderColor: 'lightblue',
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
              text: 'Precipitación',
            },
          },
        },
      },
    });
    

  } catch (error) {
      console.log(error)
      // let alerta = new swal('No se encontro el clima');
      // return alerta
  }
};

