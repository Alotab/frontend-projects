

const labels = Utils.months({count: 12});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [20, 40, 30, 40, 35, 40, 45, 39, 54, 25, 30, 25],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};










const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    // options: {
    //     animation: false,
    //     plugins: {
    //       legend: {
    //         display: false
    //       },
    //       tooltip: {
    //         enabled: false
    //       },
    //     },
        
        

    // },
    options: {
        animation: false,
        scales: {
            x: {
                ticks: {
                    display: false //this will remove only the label underneath the chart
                },
                grid: {
                    display:false  //this will remove only the grid from the chart (you can remove these lines if you want to keep the grid)
                }
            },
            y: {
                ticks: {
                    display: false //this will remove the left label (y axes)
                },
                grid: {
                    display:false  //this will remove the lines in the chart (you can remove these lines if you want to keep the grid)
                }
            }
        }
    },
    
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
});

