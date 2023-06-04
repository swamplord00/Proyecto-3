
// export let createGraphPrec;

// createGraphPrec = (canvas, data) => {
//   const chart = new Chart(canvas, {
//     type: 'bar',
//     data: {
//       labels: data.time,
//       datasets: [
//         {
//           label: 'Precipitation',
//           data: data.precipitation,
//           fill: false,
//           borderColor: 'orange',
//           tension: 0.1,
//           backgroundColor:'orange'
//         },
//       ],
//     },
//   });
//   return chart
// };


export const createGraphPrec = (canvas, data) => {
  try {
    
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Precipitación',
            data: data.precipitation,
            fill: false,
            borderColor: 'green',
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
    return chart

  } catch (error) {
      console.log(error)
      let alerta = new swal('No se encontro el clima');
      return alerta
  }
};

