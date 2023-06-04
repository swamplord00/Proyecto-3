// export const createGtemp=(canvas,data)=>{
 
//     const chart=new Chart(canvas,{
//         type:'line',
//         data:{
//             labels: data.time,
//             datasets:[{
//                 label:"Temperatura",
//                 data: data.temperature_2m,
//                 fill:false,
//                 borderColor: 'red',
//                 tension: 0.1,
//                 backgroundColor:'red'
//             }]
//         },
       
//     })

//     return chart
// }


export const createGtemp = (canvas, data) => {
  try {
    
    const hora = data.time.map((elemento) => elemento.split('T').join(' '));

    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hora,
        datasets: [
          {
            label: 'Temperatura',
            data: data.temperature_2m,
            fill: false,
            borderColor: '#DA4040',
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
              text: ' Temperatura (Cº) ',
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
