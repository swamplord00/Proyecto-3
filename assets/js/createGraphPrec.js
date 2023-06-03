
export let createGraphPrec;

createGraphPrec = (canvas, data) => {
  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: data.time,
      datasets: [
        {
          label: 'Precipitation',
          data: data.precipitation,
          fill: false,
          borderColor: 'orange',
          tension: 0.1,
          backgroundColor:'orange'
        },
      ],
    },
  });
  return chart
};
