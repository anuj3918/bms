

angular.module('pg').controller('HighChartsCtrl1', function ($scope) {

  //Ratio Chart
  Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Ratio of Successfull to failed transcations'
        },
        subtitle: {
            text: 'All payment options have been taken into account'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: 'Successfull  :  Failed'
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            plotBands: [{ // Light air
                from: 0,
                to: 2.5,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'End is inevitable',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Light breeze
                from: 2.5,
                to: 5,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'We are doomed',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Moderate breeze
                from: 5,
                to: 7.5,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'Be Cautious',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Fresh breeze
                from: 7.5,
                to: 10,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Going good',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Strong breeze
                from: 10,
                to: 15,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'Mesemerezing',
                    style: {
                        color: '#606060'
                    }
                }
            }
            ]
        },
        tooltip: {
            valueSuffix: ' m/s'
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 400000, // one hour
                pointStart: Date.UTC(2016, 11, 9, 0, 0, 0)
            }
        },
        series: [{
            name: 'Ratio',
            data: [8.6, 7.2, 9, 10.9, 6.7, 4, 2.7, 2.3, 2.3, 4.1, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });

  //Successfull and Failed Transaction Chart
  Highcharts.chart('container2', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Transactions during the week'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'No. of transactions x 10000'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Successfull',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Failed',
            data: [1, 3, 4, 3, 3, 5, 4]
        }
        // , {
        //     name: 'Ratio',
        //     data: [1, 4, 3, 6, 3, 4, 2]
        // }
        ]
    });

    //Performance of payment options
    Highcharts.chart('container3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Payment Options Performance'
        },
        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Cards',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Net Banking',
            data: [2, 5, 3, 2, 1]
        }, {
            name: 'Wallets',
            data: [3, 4, 4, 7, 5]
        }]
    });


}); //end of highcharts controller