  //时间js
  $(function () {
            function currentTime() {
                var d = new Date(),
                    setTime = '';

                setTime += d.getHours() + ':';
                setTime += (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ':';
                setTime += (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();

                return setTime;
            }

            function currentDate() {
                var d = new Date(),
                    setDate = '';
                setDate += d.getFullYear() + '年';
                setDate += (d.getMonth() + 1) + '月';
                setDate += (d.getDate() < 10 ? '0' : '') + d.getDate() + '日';
                return setDate;
            }

            function currentDay() {
                var weekDay = ['日', '一', '二', '三', '四', '五', '六'];
                var d = new Date(),
                    setDay = '';
                setDay += '星期' + weekDay[d.getDay()];
                return setDay;
            }
            setInterval(function () {
                $('#currentDateTime').html(
                    currentDate() + ' ' + currentDay() + ' ' + currentTime()
                )
            });
        });

		//资源调用
		     $(function () {
            var myChart = echarts.init(document.getElementById('echarts201804201443'));
            option = {
                color: ['#5e35b1', '#039be5', '#999999'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['成功', '失败'],
                    x: 'center',
                    bottom: 0,
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 12,
                    icon: 'rect',
                    textStyle: {

                        color: 'rgba(255,255,255,.65)'
                    },
                },
                grid: {
                    top: 5,
                    left: 0,
                    right: 0,
                    bottom: 40,
                    containLabel: true
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: 'rgba(255,255,255,.65)'
                            }
                        },

                        splitLine: {
                            show: false,
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: 'rgba(255,255,255,.65)'
                            }
                        },

                        splitLine: {
                            show: false,
                        }
                    }

                ],
                series: [
                    {
                        name: '成功',
                        type: 'bar',
                        stack: '总量',
                        barGap: 1,
                        barCategoryGap: '50%',
                        data: [120, 149, 170, 1232, 1256, 1767, 1135, 1162, 1326, 1200, 164, 133],
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#009688'
                                    }, {
                                        offset: 1,
                                        color: '#cddc39'
                                    }],
                                    globalCoord: false
                                }
                            }
                        },
                    },
                    {
                        name: '失败',
                        type: 'bar',
                        stack: '总量',
                        data: [26, 59, 90, 264, 287, 707, 176, 182, 487, 188, 60, 23],
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ff5722'
                                    }, {
                                        offset: 1,
                                        color: '#ffc107'
                                    }],
                                    globalCoord: false
                                }
                            }
                        },

                    }
                ]
            };

            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        });

		//服务发布排行榜
		  $(function () {
            var myChart = echarts.init(document.getElementById('echarts201804121502'));
            option = {
                color: ['#008c64', '#ff9800', '#999'],
                textStyle: {
                    fontFamily: 'Microsoft Yahei'
                },

                tooltip: {
                    trigger: 'axis',
                    borderRadius: 0,
                    padding: ['10', '15'],
                    backgroundColor: 'rgba(0,0,0,.85)'
                },
                legend: {
                    data: ['业务数量'],
                    x: 'center',
                    bottom: 0,
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 12,
                    borderRadius: 0,
                    icon: 'rect',
                    textStyle: {

                        color: 'rgba(255,255,255,.65)'
                    }
                },
                grid: {
                    left: 0,
                    right: 5,
                    bottom: 40,
                    top: 5,
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['市场服务', '建设项目', '交通城管', '文教卫生', '农林牧水', '社会事务', '投资项目', '社会保障和就业', '节能环保', '经济发展', '科技文化', '水利'],

                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            rotate: 45,
                            textStyle: {
                                color: 'rgba(255,255,255,.65)'
                            }
                        },

                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '业务数量',

                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: 'rgba(255,255,255,.65)'
                            }
                        },

                        splitLine: {
                            show: false,
                            lineStyle: {

                                color: [
                                    'rgba(255,255,255,.05)'
                                ]
                            }
                        }

                    }
                ],
                series: [
                    {
                        name: '业务数量',
                        type: 'bar',

                        barCategoryGap: '75%',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#5d35b0'
                                    }, {
                                        offset: 1,
                                        color: '#379ce6'
                                    }],
                                    globalCoord: false
                                }
                            }
                        },
                        data: [20, 49, 70, 83, 95, 146, 185, 262, 326, 200, 64, 33]
                    }
                ]
            };


            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        });

		//活跃部门排行
		  $(function () {
            var myChart = echarts.init(document.getElementById('echarts201806141421'));
            var option = {
                color: ['#008c64', '#ff9800', '#999'],
                textStyle: {
                    fontFamily: 'Microsoft Yahei'
                },

                tooltip: {
                    trigger: 'axis',
                    borderRadius: 0,
                    padding: ['10', '15'],
                    backgroundColor: 'rgba(0,0,0,.85)'
                },
                legend: {
                    data: ['业务数量'],
                    x: 'center',
                    bottom: 0,
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 12,
                    borderRadius: 0,
                    icon: 'rect',
                    textStyle: {

                        color: 'rgba(255,255,255,.65)'
                    }
                },
                grid: {
                    left: 0,
                    right: 5,
                    bottom: 40,
                    top: 5,
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['市场服务', '建设项目', '交通城管', '文教卫生', '农林牧水', '社会事务', '投资项目', '社会保障和就业', '节能环保', '经济发展', '科技文化', '水利'],

                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            rotate: 45,
                            textStyle: {
                                color: 'rgba(255,255,255,.65)'
                            }
                        },

                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '业务数量',

                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: 'rgba(255,255,255,.65)'
                            }
                        },

                        splitLine: {
                            show: false,
                            lineStyle: {

                                color: [
                                    'rgba(255,255,255,.05)'
                                ]
                            }
                        }

                    }
                ],
                series: [
                    {
                        name: '业务数量',
                        type: 'bar',

                        barCategoryGap: '75%',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#4caf50'
                                    }, {
                                        offset: 1,
                                        color: '#00e8fe'
                                    }],
                                    globalCoord: false
                                }
                            }
                        },
                        data: [20, 49, 70, 83, 95, 146, 185, 262, 326, 200, 64, 33]
                    }
                ]
            };


            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        });

		//资源申请情况
		 $(function () {
            var myChart = echarts.init(document.getElementById('echarts201803202214'));
            option = {
                color: ['#43a047', '#ffb300', '#888888'],
                textStyle: {
                    fontFamily: 'Microsoft Yahei',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    //                    orient: 'vertical',
                    x: 'center',
                    bottom: 0,
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 12,
                    icon: 'rect',
                    textStyle: {

                        color: 'rgba(255,255,255,.65)'
                    },
                    data: ['已通过', '被驳回', '待审核']
                },
                series: [

                    {
                        name: '占比',
                        type: 'pie',
                        radius: ['35%', '60%'],
                        center: ['50%', '45%'],
                        label: {
                            //                            normal: {
                            //                                formatter: '{b}\n  {c} ({d}%)'
                            //                            },
                            normal: {
                                formatter: '{b}  {d}%',
                                color: '#fff',
                            }
                        },

                        data: [
                            {
                                value: 26,
                                name: '已通过'
                            },
                            {
                                value: 6,
                                name: '被驳回'
                            },

                            {
                                value: 0,
                                name: '待审核'
                            }
                        ]
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        });

		//挂接资源分类及占比
		  $(function () {
            var myChart = echarts.init(document.getElementById('echarts201803201130'));
            option = {
                color: ['#039be5', '#ffb300', '#888888'],
                textStyle: {
                    fontFamily: 'Microsoft Yahei',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    //                    orient: 'vertical',
                    x: 'center',
                    bottom: 0,
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 12,
                    icon: 'rect',
                    textStyle: {

                        color: 'rgba(255,255,255,.65)'
                    },
                    data: ['接口', '文件', '库表']
                },
                series: [

                    {
                        name: '占比',
                        type: 'pie',
                        radius: ['0', '60%'],
                        center: ['50%', '45%'],
                        label: {
                            //                            normal: {
                            //                                formatter: '{b}\n  {c} ({d}%)'
                            //                            },
                            normal: {
                                formatter: '{b}  {d}%',
                                color: '#fff',
                            }
                        },

                        data: [
                            {
                                value: 65,
                                name: '接口'
                            },
                            {
                                value: 631,
                                name: '文件'
                            },
                            {
                                value: 20,
                                name: '库表'
                            }
                        ]
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        });

		//资源申请排行
		  $(function () {
            var myChart = echarts.init(document.getElementById('echarts201804121523'));
            var option = {
                textStyle: {
                    fontFamily: 'Microsoft Yahei',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var tar = params[0];
                        return tar.name + ' : ' + (params[1].value + params[0].value);
                    }
                },
                grid: {
                    top: 5,
                    left: 0,
                    right: 15,
                    bottom: 40,
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['市场服务', '建设项目', '交通城管', '文教卫生', '数码通讯', '农林牧水 ', '社会事务', '投资项目', '社会保障和就业', '节能环保', '经济发展', '水利'],
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            rotate: 45,
                            textStyle: {
                                color: 'rgba(2655,255,255,.65)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
            }
        ],
                yAxis: [
                    {
                        name: '(%)',
                        type: 'value',
                        max: 100,
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(2655,255,255,.15)'
                            },
                        },
                        axisLine: {
                            show: false

                        },
                        axisLabel: {

                            textStyle: {
                                color: 'rgba(255,255,255,.65)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
            }
        ],
                series: [
                    {
                        type: 'bar',
                        stack: '总量',

                        itemStyle: {
                            normal: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            emphasis: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [5, 10, 40, 20, 30, 0, 10, 40, 20, 30, 30, 72]
            },
                    {
                        name: '排行',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: {
                            normal: {
                                color: '#ffc107',
                                label: {
                                    show: true,
                                    position: 'outside',
                                    formatter: function (params) {
                                        for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                            if (option.xAxis[0].data[i] === params.name) {
                                                return option.series[0].data[i] + params.value;
                                            }
                                        }
                                    },

                                }
                            }
                        },
                        data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
            }
        ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        });
//中间莱芜地图
  $(function () {
            var myChart = echarts.init(document.getElementById('echarts201805141107'));

            var allData = {
                citys: [
                    {
                        name: '莱芜市',
                        value: [117.682395,36.220556],
                        symbolSize: 17
                    },
                    {
                        name: '莱城区',
                        value: [117.666499,36.20821],
                    },
                    {
                        name: '农高区',
                        value: [117.58449,36.242245],
                    },
                    {
                        name: '经开区',
                        value: [117.660056,36.246175],
                    },

                    {
                        name: '雪野区',
                        value: [117.568468,36.428894],

                    },
                    
                    {
                        name: '钢城区',
                        value: [117.817887,36.065015],

                    },
                    
                    
                    {
                        name: '高新区',
                        value: [117.724329,36.208565],
                    },

                    
                    {
                        name: '凤城街道',
                        value: [117.682865,36.208899],
                        symbolSize: 7
                    },
                    
                    {
                        name: '高庄街道',
                        value: [117.656436,36.189043],
                        symbolSize: 7
                    },  
                    {
                        name: '鹏泉街道',
                        value: [117.708833,36.206765],
                        symbolSize: 7
                    },
                    {
                        name: '张家洼街道',
                        value: [117.668298,36.275374],
                        symbolSize: 7
                    },
                    
                ],    

                moveLines: [
                    {
                        fromName: '莱芜市',
                        toName: '莱城区',

                        coords: [[117.682395,36.220556], [117.666499,36.20821]]
                    },
                    {
                        fromName: '莱芜市',
                        toName: '钢城区',

                        coords: [[117.682395,36.220556], [117.817887,36.065015]]
                    },
                    {
                        fromName: '莱芜市',
                        toName: '雪野区',

                        coords: [[117.682395,36.220556], [117.568468,36.428894]]
                    },
                    {
                        fromName: '莱芜市',
                        toName: '农高区',

                        coords: [[117.682395,36.220556], [117.58449,36.242245]]
                    },
                    {
                        fromName: '莱芜市',
                        toName: '经开区',

                        coords: [[117.682395,36.220556], [117.660056,36.246175]]
                    },
                    {
                        fromName: '莱城区',
                        toName: '凤城街道',

                        coords: [[117.666499,36.20821], [117.682865,36.208899]]
                    },
                    
                    {
                        fromName: '莱城区',
                        toName: '鹏泉街道',

                        coords: [[117.666499,36.20821], [117.708833,36.206765]]
                    },
                    {
                        fromName: '莱城区',
                        toName: '高庄街道',

                        coords: [[117.666499,36.20821], [117.656436,36.189043]]
                    },
                    {
                        fromName: '莱城区',
                        toName: '张家洼街道',

                        coords: [[117.666499,36.20821], [117.668298,36.275374]]
                    },
                ]

            };
            option = {
                textStyle: {
                    fontFamily: 'Microsoft Yahei',
                },
                legend: {
                    show: false,
                    orient: 'vertical',
                    top: 'auto',
                    left: 'right',
                    data: ['地点', '线路'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: '莱芜',
                    mapType: 'laiwu',
                    zoom: 1.2,
                    label: {
                        //normal:{
                        //show: true,
                        //textStyle:{
                        //color:'#fff',
                        //}
                        //},
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    },
                    roam: false,
                    //                    itemStyle: {
                    //                        normal: {
                    //                            areaColor: 'transparent',
                    //                            borderColor: '#3fdaff',
                    //                            borderWidth: 2,
                    //                            shadowColor: 'rgba(63, 218, 255, 0.5)',
                    //                            shadowBlur: 30
                    //                        },
                    //                        emphasis: {
                    //                            areaColor: '#2B91B7',
                    //                        }
                    //                    },

                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(255, 235, 255, .15)',
                            borderWidth: 2,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .1)' // 100% 处的颜色
                    }],
                                // globalCoord: true // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: -2,
                            shadowBlur: 5
                        },
                        emphasis: {
                            areaColor: 'rgba(128, 217, 248, .1)',
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 2,
                        }
                    },
                    //                    itemStyle: {
                    //                        normal: {
                    //                            areaColor: '#111',
                    //                            borderColor: '#222',
                    //                            borderWidth: 1,
                    //                            //                            shadowColor: 'rgba(0, 100, 255, .95)',
                    //                            //                            shadowBlur: 50
                    //                        },
                    //                        emphasis: {
                    //                            areaColor: '#333'
                    //                        }
                    //                    }
                },
                series: [{
                    name: '地点',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 1,
                    rippleEffect: {
                        brushType: 'stroke',
                        period: 15,
                        scale: 5
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            textStyle: {
                                color: 'rgba(255,255,255,.95)',
                                fontSize: 13
                            }
                        },
                        emphasis: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    //                    symbolSize: 2,
                    showEffectOn: 'render',
                    symbolSize: 5,
                    itemStyle: {
                        normal: {
                            color: "rgba(105,235,245,1)"
                        }
                    },

                    data: allData.citys
                }, {
                    name: '线路',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    large: true,

                    effect: {
                        show: true,

                        constantSpeed: 50,
                        symbol: 'diamond', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                        symbolSize: 8,
                        period: 5,
                        trailLength: 0.5,
                        trailLength: 0,
                    },
                    lineStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(105,235,245,1)'
                    }, {
                                offset: 1,
                                color: 'rgba(105,235,245,1)'
                    }], false),
                            width: 2,
                            opacity: 0.5,
                            curveness: 0
                        }
                    },
                    data: allData.moveLines
                }]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        });
