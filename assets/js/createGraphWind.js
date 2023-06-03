export const createGwind=(canvas,data)=>{
    
    
    const chart=new Chart(canvas,{
        type:'line',
        data:{
            labels: data.time,
            datasets:[{
                label:"Velocidad del viento",
                data: data.windspeed_10m,
                fill:false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor:'green'
            }]
        },
       
    })

    return chart
}