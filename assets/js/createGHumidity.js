let chart;
export const createGHumidity = (canvas, data) => {
  try {
    if(chart){
      chart.destroy()
    }
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

     chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Humedad relativa',
            data: data.relativehumidity_2m,
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
              text: '% Humedad relativa',
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error)
  }
};
