// Donut shop object constructor-------------------
function makeShop(loc, min, max, avg) {
  this.location = loc;
  this.minCR = min; // Minimum customers/hour
  this.maxCR = max; // Maximum customers/hour
  this.donutsPerCust = avg;
  this.soldDonutsArray = [];

  // Generate pseudo-random integer on [min, max]
  this.randIntFullRange = function() {
    return Math.floor(Math.random() * (this.maxCR - this.minCR + 1)) + this.minCR;
  };
  this.donutsThisHour = function() {
    return Math.floor(this.donutsPerCust * this.randIntFullRange());
  };
}


//SHOPS INFO-----------------------------
var shops = [
 Portland = new makeShop("Portland", 8, 43, 4.50),
 Vancouver = new makeShop("Vancouver", 9, 23, 6.33),
 Salem = new makeShop("Salem", 2, 28, 1.25),
 Eugene = new makeShop("Eugene", 8, 58, 3.75),
 Medford = new makeShop("Medford", 4, 37, 2.00)
];

var time = ["City", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6am", "Total" ];

var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tableBody = document.createElement("tbody");
tbl.appendChild(tableBody);
body.appendChild(tbl);

function makeHead(){
  for (var gg = 0; gg < 1; gg++){
    var hRow = document.createElement("tr");


    for (var hh = 0; hh < time.length; hh++){
      var head = document.createElement("th");
      head.innerHTML += time[hh];
      hRow.appendChild(head);

    }
    tableBody.appendChild(hRow);
  }
tbl.setAttribute("border", "4");
}

function makeTable(){

  for (var i = 0; i < shops.length; i++){
    var row = document.createElement("tr");
    //add command to get city name. (create cell and text node, attach it to row)
    var city = document.createElement("td");
    var cityText = document.createTextNode(shops[i].location);
    city.appendChild(cityText);
    row.appendChild(city);
    var total=0;
    for (var kk = 0; kk < (time.length - 2); kk++){
      var cell = document.createElement("td");
      var hourStore = shops[i].donutsThisHour();
      var cellText = document.createTextNode(hourStore);
      total += hourStore;
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //total calculator
      var totalReport = document.createElement("td");
      var totalReportText = document.createTextNode(total);
      totalReport.appendChild(totalReportText);
      row.appendChild(totalReport);

      tableBody.appendChild(row);
  }
tbl.setAttribute("border", "4")
}

makeHead();
makeTable();



function addNewShop(){
  var userLocation = (document.getElementById('loc').value);
  var userMinCR =  parseInt(document.getElementById('minCR').value);
  var userMaxCR =  parseInt(document.getElementById('maxCR').value);
  var userAvgCustDonuts = parseFloat(document.getElementById('donutPerCust').value);


      var newShop = new makeShop (userLocation, userMinCR, userMaxCR, userAvgCustDonuts);
      shops.push(newShop);
      makeTable();
}


































