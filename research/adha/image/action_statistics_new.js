$(document).ready(function () {
    $('#adc_dis').highcharts({
        chart: {
            type: 'column',
			backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: ''
        },
		credits: {  
           enabled: false  
        }, 
        xAxis: {
            categories: ['Brush hair', 'Chew', 'Clap', 'Climb stairs', 'Dive', 'Draw sword', 'Drink', 'Eat', 'Fall floor', 'Hit', 'Hug', 'Kick', 'Kiss', 'Pick', 'Pour', 'Pullup', 'Punch', 'Push', 'Run', 'Shake hands', 'Shoot bow', 'Shoot gun', 'Sit', 'Smoke', 'Stand', 'Swing baseball', 'Sword', 'Sword exercise', 'Talk', 'Throw', 'Walk', 'Wave'],
            labels:{
                style : {'fontSize' : '15px'}
			}
		},
        yAxis: {
            min: 0,
            title: {
                text: 'Number of clips',
				style : {'fontSize' : '18px'}
            },
            labels:{
                style : {'fontSize' : '15px'}
			},
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'rgba(0,0,0,0)',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br>' +
                    this.series.name + ': ' + this.y + '<br>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: '0.0~2.0s',
			color:'#29a3f2',
            data: [0,2,38,15,68,19,38,26,99,121,28,119,0,11,1,2,73,8,112,8,14,28,34,6,61,37,41,43,3,29,118,35]
        }, {
            name: '2.0~5.0s',
			color:'#68c0fa',
            data: [19,102,93,96,189,84,126,82,37,12,99,47,64,92,65,160,84,130,165,165,43,63,133,63,163,83,81,56,73,112,372,63]
        }, {
            name: '5.0~10.0s',
			color:'#99d4fa',
            data: [420,5,322,1,7,0,748,34,0,40,67,718,169,3,29,42,124,1056,161,69,32,10,163,379,206,18,305,24,40,725,54,6]
        }, {
            name: '>10.0s',
			color:'#054873',
            data: [43,0,3,0,1,0,3,83,0,111,81,1,211,0,11,0,168,0,257,35,23,2,111,4,135,5,1,4,4,5,4,0]
        }]
    });
});

