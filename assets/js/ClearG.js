export const ClearG=(chartArray)=>{
    
    try {
        console.log(chartArray.length)
        if(chartArray){
            chartArray.forEach(element => {
                console.log(element);
                element.destroy(); 
                console.log(element);
            });
            
            console.log(chartArray.length)
            // chartArray.splice(0,chartArray.length);
            
            
        }else{
            console.log("array vacio");
        }
    } catch (error) {
        console.log(error)
        // let alerta = new swal('No se elimino los graficos');
        // return alerta

    }




}