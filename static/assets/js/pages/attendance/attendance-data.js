'use strict';
$(function () {
  reportChart();
});

function reportChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("pieChart", am4charts.PieChart);

  // Add data
  chart.data = [{
    "attType": "Early In Time",
    "attPerc": "56%"
  }, {
    "attType": "Late In Time",
    "attPerc": "20%"
  }, {
    "attType": "Early Out Time",
    "attPerc": "15%"
  }, {
    "attType": "Late Out Time",
    "attPerc": "75%"
  }, {
    "attType": "On Leave",
    "attPerc": "5%"
  }];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "attPerc";
  pieSeries.dataFields.category = "attType";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
}