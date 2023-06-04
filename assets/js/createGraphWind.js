// export const createGwind=(canvas,data)=>{
    
    
//     const chart=new Chart(canvas,{
//         type:'line',
//         data:{
//             labels: data.time,
//             datasets:[{
//                 label:"Velocidad del viento",
//                 data: data.windspeed_10m,
//                 fill:false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1,
//                 backgroundColor:'green'
//             }]
//         },
       
//     })

//     return chart
// }


export const createGwind = (canvas, data) => {
  try {
    
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

    const chart = new Chart(canvas, {
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
    return chart
  } catch (error) {
        console.log(error)
        let alerta = new swal('No se encontro el clima');
        return alerta
  }
};
