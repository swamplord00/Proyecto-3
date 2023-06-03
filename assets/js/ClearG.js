export const ClearG=(chartArray)=>{
    

    try {
        if(chartArray){
            chartArray.forEach(element => {
                console.log(element.canvas);
                element.destroy();  
                console.log(element.canvas);
                 
            });
            chartArray.splice(0,chartArray.length);
            
            
        }else{
            console.log("array vacio");
        }
    } catch (error) {
        // console.log(error)
        let alerta = new swal('No se elimino los graficos');
        return alerta

    }




}