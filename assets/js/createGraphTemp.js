
export const createGtemp = (canvas, data) => {
  let chartT;
  try {
    if (chartT) {
      chartT.destroy();
    }
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

    chartT = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Temperatura',
            data: data.temperature_2m,
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
            },
          },
          y: {
            title: {
              display: true,
              text: ' Temperatura (Cº) ',
            },
          },
        },
      },
    });
    
  } catch (error) {
    console.log(error);
    // let alerta = new swal('No se encontro el clima');
    // return alerta;
  }
};
