export const makeRequest = async (input) => {
  const latLonData = await makeLatLonRequest(input);
  const { longitude, latitude } = latLonData;
  const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`;
  const output = await axios.get(endpoint);
  try {
    
    if (output.status === 200) {
      const datos = output.data;
      return datos;
    }
  } catch (error) {
    throw new error();
  }
};

export const makeLatLonRequest = async (input) => {
  
  console.log(input.value);
  const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${input.value}&count=10&language=es&format=json`;
  const output = await axios.get(endpoint);
  console.log(output.data.results);

  try {
    
    if (output.status === 200) {
      
        const datos = output.data.results[0];
        return datos;
      
      
    } else {
      console.log("Error status");
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '404',
      text: 'Nombre de ciudad no existe!',
      
    })
   
  }
};
