$(document).ready(function () {
    $('#adv_dis').highcharts({
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
            categories: ['hard', 'amazingly', 'wearily', 'clumsily', 'sweetly', 'excitedly', 'ironically', 'promptly', 'fast', 'kindly', 'carefully', 'seriously', 'barely', 'easily', 'slowly', 'quietly', 'precisely', 'gently', 'surprisedly', 'lightly', 'heavily', 'happily', 'freely', 'sadly', 'proudly', 'comfortably', 'calmly', 'vigorously', 'nervously', 'reluctantly', 'professionally', 'politely', 'painfully', 'angrily', 'patiently', 'bitterly', 'incidentally', 'frantically', 'intently', 'gracefully', 'flatly', 'confidently', 'weakly', 'solemnly', 'expertly', 'inexorably', 'triumphantly', 'hesitantly', 'dramatically', 'officially', 'anxiously'],
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
            data: [308, 28, 78, 91, 9, 171, 31, 274, 507, 65, 25, 290, 2, 3, 449, 39, 66, 3, 47, 120, 531, 290, 377, 59, 14, 26, 2, 113, 49, 21, 258, 78, 117, 207, 11, 40, 20, 86, 1, 49, 83, 23, 22, 7, 141, 117, 15, 37, 108, 22, 140]
        }, {
            name: '2.0~5.0s',
			color:'#68c0fa',
            data: [351, 154, 288, 442, 193, 603, 45, 350, 1328, 368, 175, 880, 64, 199, 2038, 142, 339, 112, 56, 361, 329, 1445, 1462, 265, 46, 93, 11, 436, 154, 120, 1065, 524, 69, 179, 63, 97, 127, 151, 46, 206, 529, 109, 16, 47, 371, 90, 40, 72, 263, 215, 368]
        }, {
            name: '5.0~10.0s',
			color:'#99d4fa',
            data: [2044, 136, 341, 346, 351, 1769, 153, 1863, 4437, 255, 474, 996, 20, 36, 3943, 310, 539, 264, 29, 2495, 1680, 4986, 2334, 374, 332, 442, 0, 117, 160, 349, 1701, 657, 174, 423, 50, 248, 388, 518, 26, 39, 1131, 745, 0, 0, 2629, 399, 166, 260, 236, 116, 344]
        }, {
            name: '>10.0s',
			color:'#054873',
            data: [508, 9, 134, 35, 467, 939, 49, 435, 947, 180, 197, 544, 0, 0, 555, 129, 35, 297, 0, 398, 243, 980, 414, 281, 4, 97, 0, 138, 234, 176, 421, 313, 2, 382, 45, 136, 15, 115, 14, 43, 156, 19, 0, 0, 49, 111, 1, 71, 43, 81, 312]
        }]
    });
});
