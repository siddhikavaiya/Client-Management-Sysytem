"use strict";
$(function () {
  initCardChart();
  chart2();
  chart3();

  $(".chart.chart-bar1").sparkline(undefined, {
    type: "bar",
    barColor: "#6d7fe2",
    negBarColor: "#000",
    barWidth: "5px",
    height: "50px",
  });
  $(".chart.chart-bar2").sparkline(undefined, {
    type: "bar",
    barColor: "#42E795",
    negBarColor: "#000",
    barWidth: "5px",
    height: "50px",
  });
});
function initCardChart() {
  //Chart Bar
  $(".chart.chart-bar").sparkline(
    [6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5, 6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5],
    {
      type: "bar",
      barColor: "#FF9800",
      negBarColor: "#fff",
      barWidth: "4px",
      height: "45px",
    }
  );

  //Chart Pie
  $(".chart.chart-pie").sparkline([30, 35, 25, 8], {
    type: "pie",
    height: "45px",
    sliceColors: ["#65BAF2", "#F39517", "#F44586", "#6ADF42"],
  });

  //Chart Line
  $(".chart.chart-line").sparkline([9, 4, 6, 5, 6, 4, 7, 3], {
    type: "line",
    width: "60px",
    height: "45px",
    lineColor: "#65BAF2",
    lineWidth: 2,
    fillColor: "rgba(0,0,0,0)",
    spotColor: "#F39517",
    maxSpotColor: "#F39517",
    minSpotColor: "#F39517",
    spotRadius: 3,
    highlightSpotColor: "#F44586",
  });

  // live chart
  var mrefreshinterval = 500; // update display every 500ms
  var lastmousex = -1;
  var lastmousey = -1;
  var lastmousetime;
  var mousetravel = 0;
  var mpoints = [];
  var mpoints_max = 30;
  $("html").on("mousemove", function (e) {
    var mousex = e.pageX;
    var mousey = e.pageY;
    if (lastmousex > -1) {
      mousetravel += Math.max(
        Math.abs(mousex - lastmousex),
        Math.abs(mousey - lastmousey)
      );
    }
    lastmousex = mousex;
    lastmousey = mousey;
  });
  var mdraw = function () {
    var md = new Date();
    var timenow = md.getTime();
    if (lastmousetime && lastmousetime != timenow) {
      var pps = Math.round((mousetravel / (timenow - lastmousetime)) * 1000);
      mpoints.push(pps);
      if (mpoints.length > mpoints_max) mpoints.splice(0, 1);
      mousetravel = 0;
      $("#liveChart").sparkline(mpoints, {
        width: mpoints.length * 2,
        height: "45px",
        tooltipSuffix: " pixels per second",
      });
    }
    lastmousetime = timenow;
    setTimeout(mdraw, mrefreshinterval);
  };
  // We could use setInterval instead, but I prefer to do it this way
  setTimeout(mdraw, mrefreshinterval);
}
function chart2() {
  var options = {
    chart: {
      height: 350,
      type: "line",
      shadow: {
        enabled: false,
        color: "#bbb",
        top: 3,
        left: 2,
        blur: 3,
        opacity: 1,
      },
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    series: [
      {
        name: "High",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
      {
        name: "Low",
        data: [19, 5, 13, 9, 17, 2, 7, 5, 4, 3, 10, 9, 29, 19, 22, 9, 12, 7],
      },
    ],
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    title: {
      align: "left",
      style: {
        fontSize: "16px",
        color: "#9aa0ac",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: ["#FFA41B"],
      strokeColor: "#fff",
      strokeWidth: 2,

      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: -10,
      max: 40,
      title: {
        text: "Profit",
        style: {
          color: "#9aa0ac",
        },
      },
      labels: {
        style: {
          color: "#9aa0ac",
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);

  chart.render();
}
function chart3() {
  new Chart(document.getElementById("chartjs_line"), {
    type: "line",
    data: {
      labels: [1500, 1600, 1700, 1750, 1800, 1850],
      datasets: [
        {
          data: [86, 114, 106, 147, 123, 178],
          label: "India",
          borderColor: "#3e95cd",
          fill: false,
          tension: 0.1,
        },
        {
          data: [72, 129, 122, 167, 165, 156],
          label: "USA",
          borderColor: "#8e5ea2",
          fill: false,
          tension: 0.3,
        },
        {
          data: [65, 134, 143, 145, 142, 162],
          label: "Germany",
          borderColor: "#3cba9f",
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#9aa0ac",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#9aa0ac",
          },
        },
        y: {
          ticks: {
            color: "#9aa0ac",
          },
        },
      },
    },
  });
}
