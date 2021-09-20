// aos
AOS.init();
// 

//electricity-chart-2//
const elChartTwoURL = 'assets/electricity_trade.csv';
const elChartPromise = papaPromise(elChartTwoURL)
let elChartTwoElem = document.getElementById('electricity-chart-two');
let elChartTwo = echarts.init(elChartTwoElem)
let elChartTwoOptions
let elChartTwoData = [[], [], [], []]
elChartPromise.then((res) =>{
    res.data.forEach((row)=>{
        elChartTwoData[0].push(row.year)
        elChartTwoData[1].push(row.total_traded_volume)
        elChartTwoData[2].push(row.czs)
        elChartTwoData[3].push(row.dms)

    })
    elChartTwoOptions ={
        title:{
            text:'ID-traded volumes through \nsingle intraday coupling',
            textStyle:{
                fontFamily: 'Inter',
                fontWeight: '300'
            }
        },

        legend: {
            y: 'bottom',
            margin: 5,
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            feature: {
                saveAsImage: {title: ''},
            }
        },
        grid: {
            left: 140,
            top: 90,
            containLabel: false
        },
        yAxis: [
            {
                
                type: 'category',
                data: elChartTwoData[0]
            }
        ],
        
        xAxis: [
            {
                type: 'value',
                position: 'top',
        axisLabel: {
        formatter: "{value} %"
        },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            }
        ],
        series: [
            // {
            //     name: 'Total traded volume',
            //     type: 'bar',
            //     barWidth: 8,
            //     emphasis: {
            //         focus: 'series'
            //     },animationDelay: function (idx) {
            //         return idx * 10;
            //     },
                
            //     data: elChartTwoData[1]
            // },
            {
                name: 'Cross-zonal trading',
                type: 'bar',
                stack: 'a',
                barWidth: 8,
                itemStyle:{
                    color: '#FC8585'
                },
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 20;
                },
                
                data: elChartTwoData[2]
            },
            {
                name: 'Domestic trading',
                type: 'bar',
                stack: 'a',
                barWidth: 8,
                itemStyle:{
                    color: '#9BE6FD'
                },
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 300;
                },
                
                data: elChartTwoData[3]
            },
        ]
    }
    elChartTwoOptions && elChartTwo.setOption(elChartTwoOptions);
    window.onresize = function() {
        elChartTwo.resize();
    }
})
//renewables-chart//
const renURL = "assets/covid_renewable.csv";
const renCovidPromise = papaPromise(renURL)
let renCovidDomElem = document.getElementById('renewable-chart')
let renCovidChart = echarts.init(renCovidDomElem)
let renCovidOptions;
let renCovidData = [[], [], [], [], []]
renCovidPromise.then( (results)=>{
    results.data.forEach((row) =>{
        renCovidData[0].push(row.year)
        renCovidData[1].push(row.renewables)
        renCovidData[2].push(row.fossil_fuels)
        renCovidData[3].push(row.wind_n_solar)
        renCovidData[4].push(row.coal)
    })
    renCovidOptions = {
        color: ['#81F39C', '#C0C0C0', '#75A3FF', '#000000'],
        title: {
            text: 'Evolution of generation mix in the EU',
            subtext: '(% share of generation)',
            textStyle:{
                fontFamily: 'Inter',
                fontWeight: '300'
            }
        },

        legend: {
            y: 'bottom',
            margin: 5,
            itemStyle:{
                opacity: 0
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: '<b>{b0}</b> <br> {a0} : {c0} % <br>{a1} : {c1} % <br>{a2} : {c2} % <br>{a3} : {c3} % <br>',
                        axisPointer: {
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {title: ''},
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '10%',
            top: '18%',
            containLabel: true
        },
        xAxis: [
            {
                
                type: 'category',
                data: renCovidData[0]
            }
        ],
        
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: "{value} %"
                    },
            }
        ],
        series: [
            {
                name: 'Renewables',
                type: 'line',
                step: 'middle',
                smooth: true,
                lineStyle: {
                    width: 1.5,
                    color: '#81F39C'
                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: renCovidData[1]
            },
            {
                name: 'Fossil fuel',
                type: 'line',
                step: 'middle',

                smooth: true,
                lineStyle: {
                    width: 1.5,
                    color: '#C0C0C0'

                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: renCovidData[2]
            },
            {
                name: 'Wind & Solar',
                type: 'line',
                step: 'middle',

                smooth: true,
                lineStyle: {
                    width: 1,
                    color: '#75A3FF',
                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: renCovidData[3]
            },
            {
                name: 'Coal',
                type: 'line',
                step: 'middle',

                smooth: true,
                lineStyle: {
                    width: 1.5,
                    color: '#000000'
                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: renCovidData[4]
            },
        ]
        
    }
          
    renCovidOptions && renCovidChart.setOption(renCovidOptions);
    window.onresize = function() {
    renCovidChart.resize();
    }
})
//electricity markup chart //


const gasURL = "assets/gas_markup.csv";
const gasmarkupPromise = papaPromise(gasURL);
var gasMarkupDomElem = document.getElementById('gas-markup-chart');
var gasMarkupChart = echarts.init(gasMarkupDomElem);
var gasMarkupOptions;
var gasMarkupData = [[],[],[],[]]
gasmarkupPromise.then(function (results) {
    results.data.forEach((row) => {
      gasMarkupData[0].push(row.year)
      gasMarkupData[1].push(row.retail_prices)
      gasMarkupData[2].push(row.wholesale_prices)
      gasMarkupData[3].push(row.mark_up)
    })
    gasMarkupOptions = {
        color:['#004FEE', '#81F39C', '#FFB40E'],

        title: {
            text: 'Gas prices',
            subtext: '(euros/MWh)',
            textStyle:{
                fontFamily: 'Inter',
                fontWeight: '300'
            }
        },
        legend: {
            y: 'bottom',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {title: ''},
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '9%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: gasMarkupData[0]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Retail Prices',
                type: 'line',
                smooth: false,
                lineStyle: {
                    width: 1
                },
                showSymbol: true,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: gasMarkupData[1]
            },
            {
                name: 'Wholesail Prices',
                type: 'line',
                smooth: false,
                lineStyle: {
                    width: 1
                },
                showSymbol: true,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: gasMarkupData[2]
            },
            {
                name: 'Markup',
                type: 'bar',
                barWidth: 8,
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: gasMarkupData[3]
            },
            
        ],
      };
      
      gasMarkupOptions && gasMarkupChart.setOption(gasMarkupOptions);
      window.onresize = function() {
      gasMarkupChart.resize();
      };
    });

const electricityURL = "assets/electricity_markup.csv";
const markupPromise = papaPromise(electricityURL);
var elMarkupChartDom = document.getElementById('el-markup-chart');
var elMarkupChart = echarts.init(elMarkupChartDom);
var elMarkupOptions;
var markupData = [[],[],[],[]]
markupPromise.then(function (results) {
    results.data.forEach((row) => {
      markupData[0].push(row.year)
      markupData[1].push(row.retail_prices)
      markupData[2].push(row.wholesale_prices)
      markupData[3].push(row.mark_up)
    })
    elMarkupOptions = {

        color:['#004FEE', '#81F39C', '#FFB40E'],
        title: {
            text: 'Electricity prices',
            subtext: '(euros/MWh)',
            textStyle:{
                fontFamily: 'Inter',
                fontWeight: '300'
            }
        },
        legend: {
            y: 'bottom',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {title: ''},
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '9%',

            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: markupData[0]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Retail Prices',
                type: 'line',
                smooth: false,
                lineStyle: {
                    width: 1
                },
                showSymbol: true,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: markupData[1]
            },
            {
                name: 'Wholesail Prices',
                type: 'line',
                smooth: false,
                lineStyle: {
                    width: 1
                },
                showSymbol: true,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: markupData[2]
            },
            {
                name: 'Markup',
                type: 'bar',
                barWidth: 8,
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'lightgray'
                    }, {
                        offset: 1,
                        color: 'darkgray'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: markupData[3]
            },
            
        ],
      };
      
      elMarkupOptions && elMarkupChart.setOption(elMarkupOptions);
      window.onresize = function() {
      elMarkupChart.resize();
      };
    });

  //stacked area chart//

  const capacityUrl = "assets/capacity_booked.csv";
  const capacityPromise = papaPromise(capacityUrl);
  var gasChartDom = document.getElementById('gas-chart');
  var gasChart = echarts.init(gasChartDom);
  var gasOptions;
  var theData = [[],[],[],[],[],[], [], []]
  capacityPromise.then(function (results) {
      results.data.forEach((row) => {
        theData[0].push(row.Time)
        theData[1].push(row.CAM_Daily)
        theData[2].push(row.CAM_Monthly)
        theData[3].push(row.CAM_Quarterly)
        theData[4].push(row.CAM_Yearly)
        theData[5].push(row.Open_Season)
        theData[6].push(row.CAM_Within_day)
        theData[7].push(row.Legacy)


      })
      gasOptions = {
          color:['#C0C0C0',  '#3DCCAD', '#FFB40E','#003FEE', '#9BE6FD', '#FC8585', '#75A3FF'],

  title: {
      text: 'Evolution of capacity booked \nby capacity type',
      subtext: '2016–2045 – TWh/days',
  textStyle:{
    fontFamily: 'Inter',
    fontWeight: '300'
}
  },
  legend: {
      y: 'bottom',
      margin: 5,
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  toolbox: {
      feature: {
          saveAsImage: {title: ''},
      }
  },
  grid: {
      left: '3%',
      top: '20%',
      right: '4%',
      bottom: '15%',
      containLabel: true
  },
  xAxis: [
      {
          type: 'category',
          boundaryGap: false,
          data: theData[0]
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: 'CAM Daily',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
              width: 0
          },
          showSymbol: false,
          areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'lightgray'
              }, {
                  offset: 1,
                  color: 'darkgray'
              }])
          },
          emphasis: {
              focus: 'series'
          },animationDelay: function (idx) {
              return idx * 10;
          },
          
          data: theData[1]
      },
      {
          name: 'CAM Monthly',
          type: 'line',
          stack: '总量',

          smooth: true,
          lineStyle: {
              width: 0
          },
          showSymbol: false,
          areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(3, 220, 200)'
              }, {
                  offset: 1,
                  color: '#3DCCAD'
              }])
          },
          emphasis: {
              focus: 'series'
          },
          animationDelay: function (idx) {
              return idx * 10+200;
          },
          data: theData[2]
      },
      {
          name: 'CAM Quarterly',
          type: 'line',
          stack: '总量',

          smooth: true,
          lineStyle: {
              width: 0
          },
          showSymbol: false,
          areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FFB40E'
              }, {
                  offset: 1,
                  color: '#FFB40E'
              }])
          },
          emphasis: {
              focus: 'series'
          },
          animationDelay: function (idx) {
              return idx * 10+200;
          },
          data: theData[3]
      },
      {
          name: 'CAM Yearly',
          type: 'line',
          stack: '总量',

          smooth: true,
          lineStyle: {
              width: 0
          },
          showSymbol: false,
          areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

              offset: 0,
              color: 'rgba(12, 23, 255)'
          }, {
              offset: 1,
              color: 'rgba(3, 4, 124)'
          }])
          },
          emphasis: {
              focus: 'series'
          },
          animationDelay: function (idx) {
              return idx * 10+200;
          },
          data: theData[4]
      },
      {
          name: 'Open Season',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
              width: 0
          },
          showSymbol: false,
          areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'lightblue'
              }, {
                  offset: 1,
                  color: '#9BE6FD'
              }])
          },
          emphasis: {
              focus: 'series'
          },
          animationDelay: function (idx) {
              return idx * 10+120;
          },
          data: theData[5]
      },
      {
        name: 'CAM Within Day',
        type: 'line',
        stack: '总量',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'red'
            }, {
                offset: 1,
                color:' #FC8585'
            }])
        },
        emphasis: {
            focus: 'series'
        },
        animationDelay: function (idx) {
            return idx * 10+120;
        },
        data: theData[6]
    },
    {
        name: 'Legacy',
        type: 'line',
        stack: '总量',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#BAD1FF'
            }, {
                offset: 1,
                color: '#75A3FF'
            }])
        },
        emphasis: {
            focus: 'series'
        },
        animationDelay: function (idx) {
            return idx * 10+120;
        },
        data: theData[7]
    },
  ],
};

gasOptions && gasChart.setOption(gasOptions);
window.onresize = function() {
gasChart.resize();
elMarkupChart.resize()
gasMarkupChart.resize()
renCovidChart.resize()
elChartTwo.resize()
myChart.resize()
};
});
function papaPromise(url) {
    return new Promise(function (resolve, reject) {
      Papa.parse(url, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: resolve,
      });
    });
  }
//

var chartDom = document.getElementById('electricity-chart-one');
var myChart = echarts.init(chartDom);
var option;

var labelRight = {
    position: 'right'
};
option = {
    title: {
        text: "Efficient use of interconnectors \nin the different timeframes in 2019 (%)",
        textStyle:{
            fontFamily: 'Inter',
            fontWeight: '300'
        }

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {title: ''},
        }
    },
    xAxis: {
        type: 'value',
        position: 'top',
        axisLabel: {
        formatter: "{value} %"
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: 140,
        top: 90,
        containLabel: false
    },
    yAxis: {
        type: 'category',
        data: ['Day ahead', 'Intraday', 'Balancing (incl. netting)']
    },
    series: [
        {
            type: 'bar',
            barWidth: 8,
            data: [
                {value: 88},
                {value: 59},
                {value: 23},
            ],
            itemStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FFD885'
                }, {
                    offset: 1,
                    color: '#FFB40E'
                }])
            },
        }
    ]
};

option && myChart.setOption(option);
window.onresize = function() {
    myChart.resize();
  };
//

//retail price chart//

let retailChartDom = document.getElementById('retail-chart');
var retailChart = echarts.init(retailChartDom);
var retailOptions;

retailOptions = {
    title: {
        text: 'Electricity price breakdown, %',
        textStyle:{
            fontFamily: 'Inter',
            fontWeight: '300'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value',
        position: 'top',
        axisLabel: {
        formatter: "{value} %"
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: 140,
        containLabel: false
    },
    xAxis: {
        type: 'category',
        data: ['2012', '2019']
    },
    series: [
        {
            name: 'Energy',
            type: 'bar',
            stack: 'total',
            itemStyle:{
                color: '#FEEA70'
            },
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [41, 37]
        },
        {
            name: 'Networks',
            type: 'bar',
            stack: 'total',
            itemStyle:{
                color: '#81F39C'
            },
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [27, 25]
        },
        {
            name: 'Residual costs',
            type: 'bar',
            stack: 'total',
            itemStyle:{
                color: '#C0C0C0'
            },
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [6, 14]
        },
        {
            name: 'Taxes',
            type: 'bar',
            stack: 'total',
            itemStyle:{
                color: '#75A3FF'
            },
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [26,24]
        },
    ]
};

retailOptions && retailChart.setOption(retailOptions);
window.onresize = function() {
    retailChart.resize();
  };
  //
//gas-retail

let gsretailChartDom = document.getElementById('retail-chart-gs');
var gsretailChart = echarts.init(gsretailChartDom);
var gsretailOptions;

gsretailOptions = {
    title: {
        text: 'Gas price breakdown, %',
        textStyle:{
            fontFamily: 'Inter',
            fontWeight: '300'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value',
        position: 'top',
        axisLabel: {
        formatter: "{value} %"
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: 140,
        containLabel: false
    },
    xAxis: {
        type: 'category',
        data: ['2012', '2019']
    },
    series: [
        {
            name: 'Energy',
            type: 'bar',
            stack: 'total',
            itemStyle:{
                color: '#FEEA70'
            },
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [56, 47]
        },
        {
            name: 'Networks',
            type: 'bar',
            stack: 'total',
            itemStyle:{
                color: '#81F39C'
            },
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [23, 31]
        },
        {
            name: 'Taxes',
            type: 'bar',
            stack: 'total',
            itemStyle:{
                color: '#75A3FF'
            },
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [21,22]
        },
    ]
};

gsretailOptions && gsretailChart.setOption(gsretailOptions);
window.onresize = function() {
    gsretailChart.resize();
  };


//choropleth
google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    
    var data = new google.visualization.DataTable();
data.addColumn('string', 'Month'); // Implicit domain label col.
data.addColumn('number', 'Total'); // Implicit series 1 data col.
data.addColumn({type:'string', role:'tooltip', p:{html:true}}); // annotation role col.
data.addRows([
    ['Austria', 3, '<b> Hubs: </b> AVTP <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 872'],
    ['Belgium', 3, '<b> Hubs: </b> ZEE+ZTP <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 599'],
    ['Luxembourg', 3, '<b> Hubs: </b> ZEE+ZTP <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 599'],
    ['Czech Republic', 3, '<b> Hubs: </b> CZVTP <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 872'],
    ['Germany', 3, '<b> Hubs: </b> NCG, GPL <br> <b>Ranking: </b>Advanced hub <br> <b>2019 combined trade volume:</b> 3,586'],
    ['Denmark', 2, '<b> Hubs: </b> DKVTP <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 22'],
    ['Spain', 3, '<b> Hubs: </b> PVB <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 238'],
    ['France', 3, '<b> Hubs: </b> PEGs <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 969'],
    ['Hungary', 2, '<b> Hubs: </b> MGP <br> <b>Ranking: </b>Emerging hub <br> <b>2019 trade volume:</b> 38'],
    ['Italy', 3, '<b> Hubs: </b> PSV <br> <b>Ranking: </b>Advanced hub <br> <b>2019 trade volume:</b> 1,372'],
    ['Lithuania', 1, '<b> Hubs: </b> LTVTP <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> 3'],
    ['Netherlands', 4, "<b> <b> Hubs: </b> </b> TTF <br> <b>Ranking:</b>Established hub <br> <b>2019 trade volume:</b> 38,272"],
    ['Poland', 2, '<b> Hubs: </b> PLVTP <br> <b>Ranking: </b>Emerging hub <br> <b>2019 trade volume:</b> 146'],
    ['Slovakia', 1, '<b> Hubs: </b> SKVTP <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> 15'],
    ['United Kingdom', 4, '<b> Hubs: </b> NBP <br> <b>Ranking: </b>Established hub <br> <b>2019 trade volume:</b> 18,346'],
    ['Portugal', 1, '<b> Hubs: </b> MIBGAS (regional) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Ireland', 1, '<b> Hubs: </b> IBP, NIBP (inactive) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Greece', 1, '<b> Hubs: </b> Mediterranean (regional), HTP (inactive) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Slovenia', 1, '<b> Hubs: </b> NBP <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Croatia', 1, '<b> Hubs: </b> SEE (regional) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Bulgaria', 1, '<b> Hubs: </b> SEE (regional), BG (planned national) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Romania', 1, '<b> Hubs: </b> SEE (regional), RO (national) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Estonia', 1, '<b> Hubs: </b> Baltic (regional) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Latvia', 1, '<b> Hubs: </b> Baltic (regional) <br> <b>Ranking: </b>Iliquid-incipient hub <br> <b>2019 trade volume:</b> N/A'],
    ['Sweden', 2, '<b> Hubs: </b> Baltic (regional) <br> <b>Ranking: </b>Emerging hub <br> <b>2019 trade volume:</b> N/A'],
]);
    var options = {
        region: '150',
        legend: 'none',
        keepAspectRatio: true,
        width: '100%',
        magnifyingGlass: {enable: true, zoomFactor: 6.5},
        values:[1, 2, 3, 4],
        colors:['#CAF1FC', '#9BE6FD', '#75A3FF', '#004FEE'],
        tooltip: { isHtml: true },
        datalessRegionColor: 'transparent',
        backgroundColor: {strokeWidth: 0, stroke: 'white'}
    };
    var chart = new google.visualization.GeoChart(document.getElementById('geochart-dom'));
    chart.draw(data, options);

  }

  //modal
  $('.open-toggle').on('click', function(){ $(this).find('.answer').toggle()})
  $('.hover-toggle').on('click', function(e){
  $(this).find('.hover-answer').toggle();})
  //
//viewport checker
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
  //anime-strokes
    let svgAnimation = anime({
    targets: ['.cls-1','.cls-3'],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return  i * 40 },
    direction: 'alternate',
    loop: true
  });