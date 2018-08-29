$(function(){
	var people_img = echarts.init(document.getElementById("people_img"));
	var option = {
    title: {
        text:'总人数: 1375801 人',
        subtext:'单位：万',
        textStyle: {
            color: '#00FFFF',
            fontSize: 18
        },
        subtextStyle:{
            color:'#8FAAEE',
            fontSize:14,
        }
    },
   
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

 
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2770C3',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#363e83 ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#9cb8ff',
                fontWeight: 'normal',
                fontSize: '14',
            },
            
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2770C3',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#9cb8ff',
                    fontWeight: 'normal',
                    fontSize: '14',
                },
                interval:0,
                rotate:30
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['莱芜市', '张家洼', '高庄','牛泉','方下','辛庄','苗山','杨庄','寨里','羊里','口镇','和庄','大王庄','雪野','茶业口']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['莱芜市', '张家洼', '高庄','牛泉','方下','辛庄','苗山','杨庄','寨里','羊里','口镇','和庄','大王庄','雪野','茶业口']
        },

    ],
    series: [{
            name: '111',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#4BFED2'
                    }, {
                        offset: 1,
                        color: '#0F7CB9'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            barGap: '100%',
            data: [70, 30, 39,21,20,30,20,35,33,66,15,26,39,60,55]
        }

    ]
};
people_img.setOption(option);
/*宏观经济库*/
var legal_img = echarts.init(document.getElementById('legal_img_img'));
var option = {
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: [ '2017', '2018'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#7C93CD'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show:false
        },
         axisLabel: {
            
            textStyle: {
                fontSize: 14,
                color:'#7C93CD'
            }
        },
      data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }, 
       ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show:false
        },
        axisLabel: {
            
            textStyle: {
                fontSize: 14,
                color:'#7C93CD'
            }
        },
        splitLine: {
            show:false,
        }
    }],
    series: [ {
        name: '2018',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [120, 110, 125, 145, 182, 191, 134, 150]
    }, {
        name: '2017',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    }, ]
};
legal_img.setOption(option);
var ele_img = echarts.init(document.getElementById("ele_img"));
var option = {
    normal : {
        color: '#0EFFBF',
        label : {
            show : false,
            position : 'bottom',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top',
                fontSize: 26,
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#2B80DD',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
labelTop = {
    normal : {
        color: '#0EFFBF',
        label : {
            show : false,
            position : 'bottom',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top',
                fontSize: 26,
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#2B80DD',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
var option = {
   series : [
        {
            type : 'pie',
            center : ['20%', '50%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:77, itemStyle : labelBottom},
                {name:'资格证书', value:23,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '50%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:55, itemStyle : labelBottom},
                {name:'许可证执照', value:45,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['80%', '50%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:68, itemStyle : labelBottom},
                {name:'企业资质', value:32,itemStyle : labelTop}
            ]
        },
       
    ]
};
ele_img.setOption(option);

var web_office = echarts.init(document.getElementById("web_office"));
var option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show:false
        },
         axisLabel: {
            
            textStyle: {
                fontSize: 14,
                color:'#7C93CD'
            }
        },
      data: ['1','2','3','4','5','6','7','8','9','10','11','12']
    }, 
       ],
    yAxis: [{
    	name:'(人)',
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show:false
        },
        axisLabel: {
            
            textStyle: {
                fontSize: 14,
                color:'#7C93CD'
            }
        },
        splitLine: {
            show:false,
        }
    }],
    series: [ {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    }, ]
};
web_office.setOption(option);


var industry = echarts.init(document.getElementById("industry"));
var option = {
    legend: {
        right: 20,
        top:20,
        textStyle: {
            color: '#fff',
        },
        data: ['2016', '2017', '今年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2B80DD',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#363e83 ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#8696C6',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2B80DD',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#8696C6',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
              
            },
            data: ['能源工业', '钢铁工业', '机械工业','高新工业','轻工业']
        }

    ],
    series: [  {
            name: '2016',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#2b80dd',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            barWidth: '10%',
            data: [8, 15, 10,20,56]
        }, {
            name: '2017',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#a8f233',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            barGap: '100%',
            data: [8, 17, 26,26,56]
        }, {
            name: '今年',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                   color: '#f29133',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            barGap: '100%',
            data: [8, 17, 26,20,30]
        }

    ]
};

industry.setOption(option);


var agriculture  = echarts.init(document.getElementById("agriculture"));
var option = {
    legend: {
        right: 20,
        top:20,
        textStyle: {
            color: '#fff',
        },
        data: ['2016', '2017', '今年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2B80DD',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#363e83 ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#8696C6',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2B80DD',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#8696C6',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
              
            },
            data: ['小麦', '玉米', '大豆','水稻','蔬菜','果品']
        }

    ],
    series: [  {
            name: '2016',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f29133',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            barWidth: '10%',
            data: [8, 15, 10,20,56,50]
        }, {
            name: '2017',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f2d933',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            barGap: '100%',
            data: [8, 17, 26,26,56,30]
        }, {
            name: '今年',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                   color: '#88f233',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            barGap: '100%',
            data: [8, 17, 26,20,30,70]
        }

    ]
};
agriculture.setOption(option);

var company  = echarts.init(document.getElementById("company"));
var product  = echarts.init(document.getElementById("product"));
var data = [
    {"value": 26, "name": "已检查"},
    {"value": 16.7, "name": "未检查"}, 
    {
        "value": 12.4,
        "name": "不合格"
        
    }
];
data_name = [];
for (var n  in data){
    data[n]['name'] = data[n]['name'] + ' '+data[n]['value'] +'%';
    data_name.push(data[n]['name'])
}

var option = {
    color:['#E5FF0E','#03CDFF','#037BFF'],
    legend: {
        orient: 'vertical',
        top: 150,
        left:30,
        data:data_name,
        textStyle: {
            color: "#8594C1",
            fontWeight:'normal',
            fontFamily:'宋体'
        }
    },
    series: [

        {
            type:'pie',
            radius: ['40%', '55%'],
            center:['72%','50%'],
            data:data,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    },
                    position:'center'
                }
            },
            labelLine:{
                show:false
            }
        }
    ]
};
company.setOption(option);
product.setOption(option);
});
$(function(){
	setInterval(function(){
		var myDate = new Date();
		var year = myDate.getFullYear();
		var month = myDate.getMonth()+1;
		var day = myDate.getDate()
		var time = myDate.toLocaleTimeString();
		var week = myDate.getDay();
		switch(week){
			case 1 :week="星期一";break;
			case 2 :week="星期二";break;
			case 3 :week="星期三";break;
			case 4 :week="星期四";break;
			case 5 :week="星期五";break;
			case 6 :week="星期六";break;
			case 0 :week="星期日";break;
		}
		var date = year + " 年 " + month +" 月 " + day +" 日 ";
		$(".curent_time").html(time);
		$(".right_system_title p").html(date);
	},1000);
	
});