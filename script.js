// Our labels along the x-axis
var days = ["Sun","Mon","Tue", "Wed","Thu","Fri","Sat"];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,478];
var asia = [282,350,411,502,635,809,947,1402,700,267];
var europe = [600,544,223,190,503,345,407,];
var latinAmerica = [244,477,555,402,355,577,767,467,667,779];
var northAmerica = [666,334,222,122,777,426,682,772,512,633];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [
      { 
        data: africa,
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: asia,
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: europe,
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: northAmerica,
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});