import VOO from './stockdata/VOO'

const setEventHandlers = function() {

    const tickers = ["AAPL", "SQ", "FB", "AMD", "JPM"]
    function randomticker() {
        return tickers.pop(tickers[Math.floor(Math.random() * tickers.length)]);
    }

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor;
    }
    let closeV = VOO.data.map((cv) => cv.close).reverse()
    let dates = VOO.data.map((p) => p.date.slice(0, 10)).reverse()
    const ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: VOO.meta.name,
                data: closeV,
                backgroundColor: "rgb(210, 180, 140)",
                borderColor: "rgb(210, 180, 140)",
                pointRadius: 1,
                pointHoverRadius: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            },
            transitions: {
                active: {
                    animation: {
                        duration: 400
                    }
                },
                show: {
                    animations: {

                        x: {
                            from: 0
                        },
                        y: {
                            from: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        x: {
                            to: 0
                        },
                        y: {
                            to: 0
                        }
                    }
                }
            }
        }
    })





    let oneMonth = document.getElementById("one-month")
    oneMonth.onclick = function () {
        myChart.config._config.data.datasets[0].data.slice(-30);
        myChart.config._config.data.labels = myChart.config._config.data.labels.slice(-30)
    };
    document.body.appendChild(oneMonth);

    let threeMonths = document.getElementById("three-months")
    threeMonths.onclick = function () {
        myChart.config._config.data.datasets[0].data = myChart.config._config.data.datasets[0].data.slice(-90)
        myChart.config._config.data.labels = myChart.config._config.data.labels.slice(-90)
        myChart.update()
    };
    document.body.appendChild(threeMonths);

    let fiveMonths = document.getElementById("five-months")
    fiveMonths.onclick = function () {
        myChart.config._config.data.datasets[0].data = myChart.config._config.data.datasets[0].data.slice(-150)
        myChart.config._config.data.labels = myChart.config._config.data.labels.slice(-150)
        myChart.update()
    };
    document.body.appendChild(fiveMonths);

    let oneYear = document.getElementById("one-year")
    oneYear.onclick = function () {
        myChart.config._config.data.datasets[0].data = myChart.config._config.data.datasets[0].data.slice(-365)
        myChart.config._config.data.labels = myChart.config._config.data.labels.slice(-365)
        myChart.update()
    };
    document.body.appendChild(oneYear);


    let gen_egg = document.getElementById("gen_egg");
    gen_egg.onclick = function () {
        let ticker = randomticker();
        fetch(`https://api.stockdata.org/v1/data/eod?symbols=${ticker}&api_token=A1XKWwqhgK9buVscW4tWdd4gdU2aJcGf09Dul1wo&date_from=2020`)
            .then(response => response.json())
            .then(data => graphdata(data));
    }
    document.body.appendChild(gen_egg);


    let gen_basket = document.getElementById("gen_basket");
    gen_basket.onclick = function () {
        let times = 4;
        for (let i = 0; i < times; i++) {
            let ticker = randomticker();
            fetch(`https://api.stockdata.org/v1/data/eod?symbols=${ticker}&api_token=A1XKWwqhgK9buVscW4tWdd4gdU2aJcGf09Dul1wo&date_from=2020`)
                .then(response => response.json())
                .then(data => graphdata(data));
        }
    };
    document.body.appendChild(gen_basket);

    function graphdata(obj) {
        let  color = random_bg_color();
        let closeValues = obj.data.map((p) => p.close).reverse();
        myChart.data.datasets.push({
            label: obj.meta.name,
            data: closeValues,
            backgroundColor: color,
            borderColor: color,
            pointRadius: 1,
            pointHoverRadius: 1
        });
        myChart.options.plugins.legend.display = true;
        myChart.update();
        
    }
}
export default setEventHandlers;