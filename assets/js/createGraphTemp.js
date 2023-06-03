export const createGtemp=(canvas,data)=>{
    
    
    const chart=new Chart(canvas,{
        type:'line',
        data:{
            labels: data.time,
            datasets:[{
                label:"Temperatura",
                data: data.temperature_2m,
                fill:false,
                borderColor: 'red',
                tension: 0.1,
                backgroundColor:'red'
            }]
        },
       
    })

    return chart
}