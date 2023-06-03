export const createGHumidity=(canvas,data)=>{
    
    
    const chart=new Chart(canvas,{
        type:'line',
        data:{
            labels: data.time,
            datasets:[{
                label:"Humedad relativa",
                data: data.relativehumidity_2m,
                fill:false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
       
    })

    return chart
}