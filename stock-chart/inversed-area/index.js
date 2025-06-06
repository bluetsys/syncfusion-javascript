ej.base.enableRipple(window.ripple)
renderInversedStockChart = function (aapl) {
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: { valueType: 'DateTime', isInversed: true,
             majorGridLines: { width: 0 },crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', height: 0 }, isInversed: true, crosshairTooltip: { enable: true }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: aapl, xName: 'x', yName: 'high', type: 'Area'
                }
            ],
            seriesType: [],
            indicatorType : [],
            crosshair: { enable: true, lineType:'Both' },
            title: 'AAPL Stock Price',
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            }
            // custom code end
        });
        stockChart.appendTo('#container');
    };
    
        var aapl;
        var fetchApi = new ej.base.Fetch('./src/stock-chart/data-source/aapl.json', 'GET', true);
        fetchApi.send().then();
        fetchApi.onSuccess = function (data) {
            aapl = data;
            aapl.map(function (data) {
                data.x = new Date(data.x);
            });
            renderInversedStockChart(aapl);
        };
    