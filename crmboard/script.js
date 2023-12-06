// const labels = Utils.months({count: 12});
const labels = ['Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec', 'jan', 'feb'];
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    options: {
        responsive: true,
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
        labels: labels,
        datasets: [{
          label: '',
          data: [20, 40, 30, 40, 35, 40, 45, 39, 54, 25, 30, 25, 30, 20],
          fill: true,
          backgroundColor: '#9BD0F5',
          borderColor: 'rgb(0, 0, 192)',
          tension: 0.1
        }]
    },
});


// const labels = Utils.months({count: 12});
const labelss = ['Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar', 'apr', 'may'];
const ctxs = document.getElementById('myCharts');
new Chart(ctxs, {
    type: 'bar',
    options: {
        responsive: true,
        animation: false,
        layout: {
            padding: -8,

        },
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



    // const labels = Utils.months({count: 7});
    data: {
      labels: labelss,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 99, 20, 60, 55, 33, 80, 66, 97, 50],
        // fill: true,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
});




// Button to appear and disappear the logout container
const settingsEl = document.querySelector('.settings');
const logoutDiv = document.querySelector('.settings-logout');

settingsEl.addEventListener('click', (event) => {
    // prevent this click from triggering the document click event
    event.stopPropagation();
    logoutDiv.classList.toggle('active');
});

document.addEventListener('click', () => {
    logoutDiv.classList.remove('active');
});