const dates = [];
const temperatures = [];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

before = 35
for (let i = 0; i < 24; i++){
    dates.push(`${i}:00`)
    res = getRandomArbitrary(before, 38)
    before = res - 1.5
    temperatures.push(res)
}

// Get the canvas element
const ctx = document.getElementById('temperatureChart').getContext('2d');

// Create the chart
const temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'Температура',
            data: temperatures,
            borderColor: 'blue',
            fill: false,
        }],
    },
    options: {
        scales: {
            x: {
                type: 'category',
                labels: dates,
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
            },
        },
    },
});