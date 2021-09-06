// aos
AOS.init();
// 
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

        legend: {
            y: 'top',
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
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                
                type: 'category',
                boundaryGap: false,
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
        title: {
            text: 'Gas',
            subtext: '(euros/MWh)'
        },
        legend: {
            y: 'top',
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
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
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
                smooth: true,
                lineStyle: {
                    width: 1
                },
                showSymbol: false,
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
                smooth: true,
                lineStyle: {
                    width: 1
                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: gasMarkupData[2]
            },
            {
                name: 'Markup',
                type: 'scatter',
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

        color: ['gray', 'rgba(12, 177, 114)', 'orange', 'rgba(3, 4, 124)', 'lightblue'],
        title: {
            text: 'Electricity',
            subtext: '(euros/MWh)'
        },
        legend: {
            y: 'top',
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
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
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
                smooth: true,
                lineStyle: {
                    width: 1
                },
                showSymbol: false,
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
                smooth: true,
                lineStyle: {
                    width: 1
                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },animationDelay: function (idx) {
                    return idx * 10;
                },
                
                data: markupData[2]
            },
            {
                name: 'Markup',
                type: 'scatter',
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

  // title: {
  //     text: 'Electricity production by sector (TWh)',
  //     subtext: 'Europe, geographical boundaries'
  // },
  legend: {
      y: 'top',
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
      right: '4%',
      bottom: '3%',
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
                  color: 'rgba(12, 177, 114)'
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
                  color: 'orange'
              }, {
                  offset: 1,
                  color: 'rgba(220,218,218)'
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
                  color: 'rgba(0, 230, 255)'
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
                color: 'rgba(0, 230, 255)'
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
                color: 'black'
            }, {
                offset: 1,
                color: 'rgba(0, 230, 255)'
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
    // title: {
    //     text: 'Level of efficiency in the use of interconnectors in Europe in the different timeframes (% use of available commercial capacity in the ‘right economic direction’) – 2019',
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
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
    // title: {
    //     text: 'Level of efficiency in the use of interconnectors in Europe in the different timeframes (% use of available commercial capacity in the ‘right economic direction’) – 2019',
    // },
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
                color: '#C0C0C0'
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
                color: '#FC8585'
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
                color: '#BC9BFD'
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

//choropleth
// google.charts.load('current', {
//     'packages':['geochart'],
//   });
//   google.charts.setOnLoadCallback(drawRegionsMap);

//   function drawRegionsMap() {
//     var data = google.visualization.arrayToDataTable([
//       ['Country', 'Popularity'],
//       ['Germany', 'Yes'],
//       ['United States', 'No'],
//       ['Brazil', 'No'],
//       ['Canada', 'No'],
//       ['France', 'Yes'],
//       ['RU', 'No']
//     ]);

//     var options = {
//         region: '150',
//         colorAxis: {values:['Yes', 'No'],
//             colors:['red', 'yellow']}
//     };

//     var chart = new google.visualization.GeoChart(document.getElementById('electricity-chart-two'));

//     chart.draw(data, options);
//   }

  //modal
  $('.open-toggle').on('click', function(){ $(this).find('.answer').toggle()})
  //
//viewport checker

function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }
  
  //anime-strokes
  let trigger = $('#electricity-ill-one')
    let svgAnimation = anime({
    targets: '.cls-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 10 },
    direction: 'alternate',
    loop: false
  });


  //choropleth-d3



  const svg =    d3.select("#bubbles")
  .append("div")
  .classed("svg-container", true) //container class to make it responsive
  .append("svg")
  //responsive SVG needs these 2 attributes and no width and height attr
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 600 400")
  //class to make it responsive
  .classed("svg-content-responsive", true); 

// Map and projection
const projection = d3.geoMercator()
    .center([2, 47])                // GPS of location to zoom on
    .scale(1100)     
    // This is like the zoom


// Create data for circles:
const markers = [
  {long: 9.083, lat: 42.149, group: "A", size: 34}, // corsica
  {long: 7.26, lat: 43.71, group: "A", size: 14}, // nice
  {long: 2.349, lat: 48.864, group: "B", size: 87}, // Paris
  {long: -1.397, lat: 43.664, group: "B", size: 41}, // Hossegor
  {long: 3.075, lat: 50.640, group: "C", size: 78}, // Lille
  {long: -3.83, lat: 58, group: "C", size: 12} // Morlaix
];

// Load external data and boot
d3.json("assets/EU.geojson").then( function(data){

    // Filter data
    data.features = data.features
    console.log(data.features)
    // Create a color scale
    const color = d3.scaleOrdinal()
      .domain(["A", "B", "C" ])
      .range([ "#402D54", "#D18975", "#8FD175"])

    // Add a scale for bubble size
    const size = d3.scaleLinear()
      .domain([1,100])  // What's in the data
      .range([ 4, 50])  // Size in pixel

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "black")
        .style("opacity", .3)

        //tooltip

        const Tooltip = d3.select("#bubbles")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 1)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
  
      // Three function that change the tooltip when user hover / move / leave a cell
      const mouseover = function(event, d) {
        Tooltip.style("opacity", 1)
      }
      var mousemove = function(event, d) {
        Tooltip
          .html(d.name + "<br>" + "long: " + d.long + "<br>" + "lat: " + d.lat)
          .style("left", (event.x)/2 + "px")
          .style("top", (event.y)/2 - 30 + "px")
      }
      var mouseleave = function(event, d) {
        Tooltip.style("opacity", 0)
      }
  
    // Add circles:
    svg
      .selectAll("myCircles")
      .data(markers)
      .join("circle")
        .attr("cx", d => projection([d.long, d.lat])[0])
        .attr("cy", d => projection([d.long, d.lat])[1])
        .attr("r", d => size(d.size))
        .style("fill", d => color(d.group))
        .attr("stroke", d => color(d.group))
        .attr("stroke-width", 3)
        .attr("fill-opacity", .4)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
})
  
