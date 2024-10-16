var ctx = document.getElementById('myChart').getContext('2d');

var incomeData = [10, 20, 30, 40, 50, 60, 70];
var expenseData = [5, 15, 25, 35, 45, 55, 65];

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Penghasilan',
            data: incomeData,
            backgroundColor: 'rgba(0, 123, 255, 0.7)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart(type) {
    if (type === 'income') {
        chart.data.datasets[0].data = incomeData;
        chart.data.datasets[0].label = 'Penghasilan';
    } else {
        chart.data.datasets[0].data = expenseData;
        chart.data.datasets[0].label = 'Pengeluaran';
    }
    chart.update();
}


function updateYear(year) {
    console.log('Selected year:', year);
}
