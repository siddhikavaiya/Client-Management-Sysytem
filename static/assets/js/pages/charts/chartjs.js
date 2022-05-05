$(document).ready(function () {
  getlinechart();
  getbarchart();
  getpiechart();
  getradarchart();
  getpolarareachart();
  getdonutchart();
});

function getbarchart() {
  // Bar chart
  new Chart(document.getElementById("chartjs_bar"), {
    type: "bar",
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [2478, 5267, 1734, 2548, 1433],
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
function getlinechart() {
  new Chart(document.getElementById("chartjs_line"), {
    type: "line",
    data: {
      labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
      datasets: [
        {
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false,
          tension: 0.1,
        },
        {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false,
          tension: 0.3,
        },
        {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: "Europe",
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
function getpiechart() {
  new Chart(document.getElementById("chartjs_pie"), {
    type: "pie",
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [2478, 5267, 734, 784, 433],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#9aa0ac",
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
function getradarchart() {
  new Chart(document.getElementById("chartjs_radar"), {
    type: "radar",
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77, 55.61, 21.69, 6.62, 6.82],
        },
        {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48, 54.16, 7.61, 8.06, 4.45],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Distribution in % of world population",
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#9aa0ac",
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
function getpolarareachart() {
  new Chart(document.getElementById("chartjs_plar_area"), {
    type: "polarArea",
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [2478, 5267, 734, 784, 433],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050",
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#9aa0ac",
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
function getdonutchart() {
  new Chart(document.getElementById("chartjs_donut"), {
    type: "doughnut",
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [2478, 5267, 734, 784, 433],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050",
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#9aa0ac",
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
