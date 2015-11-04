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
var Portland = new makeShop("Portland", 8, 43, 4.50);
var Vancouver = new makeShop("Vancouver", 9, 23, 6.33);
var Salem = new makeShop("Salem", 2, 28, 1.25);
var Eugene = new makeShop("Eugene", 8, 58, 3.75);
var Medford = new makeShop("Medford", 4, 37, 2.00);

//TABLE CONSTRUCTOR----------------------------------
var shops = [Portland, Vancouver, Salem, Eugene, Medford
];

var body = document.getElementsByTagName("body")[0];

var tbl = document.createElement("table");
var tableBody = document.createElement("tbody");



function makeCell(){
//MAKECELL FUNCTION ORIENTATION
//var clear = getElementsByTagName("tbody");
//clear.innerHTML = "";



//makeCell FUNCTION UTILITY
var shopsString = ["Portland", "Vancouver", "Salem", "Eugene", "Medford"];
var tableTop = ["Location","7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "Total"];




//MAKECELL PRINTING-------------------

//COLUMN HEADERS
for (var v=0; v<1; v++){
  var thead = document.createElement("thead");
    for (var p=0; p< tableTop.length; p++){
      var title = document.createElement("th");
      var titleText = document.createTextNode(tableTop[p]);
      //head text appended to head
      title.appendChild(titleText);
      //head appended to row
      thead.appendChild(title);
    }

  tbl.appendChild(thead);
}

//ROW HEADERS
for (var i =0; i < shops.length; i++){
  var row = document.createElement("tr");

  for (var h=0; h<1; h++){  //City names deployment
    var head = document.createElement("th");
    var headText = document.createTextNode(shops[i].loc);
    //head text appended to head
    head.appendChild(headText);
    //head appended to row
    row.appendChild(head);
  }
//h
var counter = 0;
var storeTotal = 0;

  //CELL TEXT NODES
  for (var j = 0; j < 12; j++){
    var cell = document.createElement("td");
    var cellText = document.createTextNode(shops[i].donutsThisHour());
    counter++;

    storeTotal = storeTotal + shops[i].donutsThisHour();
    //console.log("counter =" + counter);

    if (counter === 12){
      console.log("STORE TOTAL = " + storeTotal);
      // append total to
      var total = document.createTextNode(storeTotal);
      row.appendChild(total);
      //row appended to table
      tableBody.appendChild(row);
    }
    //cell text appended to cell
    cell.appendChild(cellText);
    //cell appended to row
    row.appendChild(cell);
  }

  ///h
  //append total to
  var totalCell = document.createElement("td");
  row.appendChild(totalCell);
  //row appended to table
  tableBody.appendChild(row);

}

//table body appeneded to table
tbl.appendChild(tableBody);
//table appended to body
body.appendChild(tbl);
//Table set to use a 2px border
tbl.setAttribute("id = table", "border", "2px");
}

//Add New line to table, using form
function addNewShop(){
var userLocation = (document.getElementById('loc').value);
var userMinCR =  parseInt(document.getElementById('minCR').value);
var userMaxCR =  parseInt(document.getElementById('maxCR').value);
var userAvgCustDonuts = parseFloat(document.getElementById('donutPerCust').value);
var newShop = new makeShop (userLocation, userMinCR, userMaxCR, userAvgCustDonuts);
shops.push(newShop);
makeCell();
}


makeCell();

//SCRATCH SPACE-----------------------

/*for (var d = 0; d <12; d++){
      var hold = ;
      storeTotal += hold;
      var total = document.createTextNode(storeTotal);

    }*/






