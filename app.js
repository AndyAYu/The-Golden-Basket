let eggs = ["AAPL", "TSLA", "GOOGL", "AMZN", "FB"]

function randomEgg () {
    return eggs.pop(eggs[Math.floor(Math.random() * eggs.length)]);
}
let ticker = randomEgg()

let gen_egg = document.createElement("button");
gen_egg.innerHTML = "Generate Egg";
gen_egg.onclick = function () {
    fetch(`https://api.stockdata.org/v1/data/eod?symbols=${ticker}&api_token=xqBXpmR7pKuoaW8Dam5EVV3rJRovf8wUJoAzsCq8`)
        .then(response => response.json())
        .then(data => graphdata(data));
};
document.body.appendChild(gen_egg);


let gen_basket = document.createElement("button");
gen_basket.innerHTML = "Generate Basket";
gen_basket.onclick = function () {
    alert("Button is clicked");
};
document.body.appendChild(gen_basket);


function graphdata(obj) {
    const closeValues = obj.data.map((p) => p.close).reverse()
    const dates = obj.data.map((p) => p.date.slice(0,10)).reverse()

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        rbc(bgColor);

        document.body.style.background = bgColor;
    }

    const data = {
        labels: dates,
        datasets: [{
            label: `${obj.meta.name}`,
            backgroundColor: random_bg_color(callback),
            borderColor: ,
            data: closeValues,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
        );
}
// function updateConfigByMutating(chart) {
//     chart.options.plugins.title.text = 'new title';
//     chart.update();
// }

// function updateConfigAsNewObject(chart) {
//     chart.options = {
//         responsive: true,
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Chart.js'
//             }
//         },
//         scales: {
//             x: {
//                 display: true
//             },
//             y: {
//                 display: true
//             }
//         }
//     };
//     chart.update();
// }
    
    