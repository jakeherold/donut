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

  // array inside the object constructor
  this.donutArray = function(){
    for (qq=0; qq < 12; qq++){

      var pushDonuts = this.donutSoldThisHour();
      soldDonutsArray.push(pushDonuts);
      //return soldDonuts;
    }
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

function makeHead(){
  for (var gg = 0; gg < 1; gg++){
    var hRow = document.createElement("tr");
    var hCell = hRow.insertCell(0);
    //hCell.innerHTML += time[gg];

    for (var hh = 0; hh < time.length; hh++){
      var head = document.createElement("th");
      //var headCell = head.insertCell(0);
      head.innerHTML += time[hh];
      hCell.appendChild(head);

    }
    tableBody.appendChild(hRow);
  }
  tbl.appendChild(tableBody);
body.appendChild(tbl);
tbl.setAttribute("border", "4");
}

function makeTable(){
  for (var i = 0; i < time.length; i++){
    var row = document.createElement("tr");
    var rowCell = row.insertCell(0);
    rowCell.innerHTML += time[i];

    for (var kk = 0; kk < shops.length; kk++){
      var cell = document.createElement("td");
      cell.innerHTML = shops[kk].donutsThisHour();
      row.appendChild(cell);
    }
      tableBody.appendChild(row);
  }
tbl.appendChild(tableBody);
body.appendChild(tbl);
tbl.setAttribute("border", "4")
}


makeHead();
makeTable();





















/*// OLD TABLE CONSTRUCTOR----------------------------------

var tbl = document.getElementById("myTable");
var tableBody = document.createElement("tbody");
tbl.appendChild(tableBody);


function makeTable(){

tableBody.innerHTML = "";

//ROW creation
for (var i =0; i < shops.length; i++){
  var row = document.createElement("tr"); //create new row

  for (var h=0; h<1; h++){  //create that cities' row
    var head = document.createElement("td");
    var headText = document.createTextNode(shops[i].location);

    head.appendChild(headText);

    row.appendChild(head);
  }

var counter = 0;
var storeTotal = 0;

  //create random numbers
  for (var j = 0; j <= 12; j++){
    var cell = document.createElement("td");
    var cellText = document.createTextNode(shops[i].donutsThisHour());
    counter++;

    storeTotal = storeTotal + shops[i].donutsThisHour();
    //console.log("counter =" + counter);

    if (counter === 13){
      console.log("STORE TOTAL = " + storeTotal);
      // append total to
      var total = document.createTextNode(storeTotal);
      total.appendChild(storeTotal);
      row.appendChild(total);
      //row appended to table
      tableBody.appendChild(row);

    } else {//cell text appended to cell
      cell.appendChild(cellText);
      //cell appended to row
      row.appendChild(cell);
    }
  }
}
tbl.appendChild(tableBody);
tbl.setAttribute("id", "myTable");
tbl.setAttribute("border", "2px");
}

//Add New line to table, using form
function addNewShop(){
  var userLocation = (document.getElementById('loc').value);
  var userMinCR =  parseInt(document.getElementById('minCR').value);
  var userMaxCR =  parseInt(document.getElementById('maxCR').value);
  var userAvgCustDonuts = parseFloat(document.getElementById('donutPerCust').value);

  if ((userLocation = NaN) && (userMinCR !=NaN) && (userMaxCR != NaN) && (userAvgCustDonuts != NaN)){
      var newShop = new makeShop (userLocation, userMinCR, userMaxCR, userAvgCustDonuts);
      shops.push(newShop);
      makeTable();
}

}
*/

