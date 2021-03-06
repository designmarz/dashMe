$(document).ready(function() {
  getData = function() {
    var stockUrl = 'https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?';
    $.getJSON(stockUrl, function (data) {
        // console.log('getJSON Data', data);
        renderStockChart(data, 'stock-container');
        renderStockChart(data, 'stock-container-1');
    });
}

renderStockChart = function(data, selector) {
    console.log('renderStockChart(data)', selector);
        // Create the chart
    Highcharts.StockChart({
        chart: {
            renderTo: document.getElementById(selector)
        },
        rangeSelector: {
            selected: 1
        },
        title: {
            text: 'AAPL Stock Price'
        },
        series: [{
            name: 'AAPL Stock Price',
            data: data,
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }]
    });
}

setTimeout(getData, 0);

});