//BRUTE FORCE
// Logging utility functions
var PL  = document.getElementById("pLog");
var tr1 = document.getElementById("tr1");

function mylog(z)     { PL.innerHTML += (z + "<br>"); }
function mylogNoBr(z) { PL.innerHTML += z; }
function clearLog()   { PL.innerHTML = ""; }

// Donut shop object constructor
function makeShop(loc, min, max, avg) {
  this.location    = loc;
  this.minCR = min; // Minimum customers/hour
  this.maxCR = max; // Maximum customers/hour
  this.donutsPerCust = avg;

  // Generate pseudo-random integer on [min, max]
  this.randIntFullRange = function() {
    return Math.floor(Math.random() * (this.maxCR - this.minCR + 1)) + this.minCR;
  }
  this.donutsThisHour = function() {
    return Math.floor(this.donutsPerCust * this.randIntFullRange());
  }
}

var PDX = new makeShop("Portland", 8, 43, 4.50); // Instantiate object

/* Theoretical Loop for creating random numbers

for (ii=0; ii<13; ii++){
  var pdxArray = [];
  var pdxDonutsPerHour = push.PDX.donutsThisHour();
}
*/
// For Portland:
var pdx_6am = PDX.donutsThisHour(); // Geneate random donut total for 6 am
var pdx_7am = PDX.donutsThisHour(); // Geneate random donut total for 7 am
var pdx_8am = PDX.donutsThisHour(); // Geneate random donut total for 8 am
var pdx_9am = PDX.donutsThisHour(); // Geneate random donut total for 9 am
var pdx_10am = PDX.donutsThisHour(); // Geneate random donut total for 10 am
var pdx_11am = PDX.donutsThisHour(); // Geneate random donut total for 11 am
var pdx_12pm = PDX.donutsThisHour(); // Geneate random donut total for 12 pm
var pdx_1pm = PDX.donutsThisHour(); // Geneate random donut total for 1 pm
var pdx_2pm = PDX.donutsThisHour(); // Geneate random donut total for 2 pm
var pdx_3pm = PDX.donutsThisHour(); // Geneate random donut total for 3 pm
var pdx_4pm = PDX.donutsThisHour(); // Geneate random donut total for 4 pm
var pdx_5pm = PDX.donutsThisHour(); // Geneate random donut total for 5 pm
var pdx_6pm = PDX.donutsThisHour(); // Geneate random donut total for 6 pm

/* Theoretical total loop
for(jj=0; jj < pdx_total.length; jj++){

}
*/
var pdx_total = pdx_6am + pdx_7am + pdx_8am + pdx_9am + pdx_10am + pdx_11am + pdx_12pm + pdx_1pm + pdx_2pm + pdx_3pm + pdx_4pm + pdx_5pm + pdx_6pm;

//Add printing Loop

tr1.innerHTML="<td>" + "Portland" + "</td> <td>"+pdx_6am+"</td> <td>"+pdx_7am+"</td> <td>"+pdx_8am+"</td> <td>"+pdx_9am+"</td>  <td>"+pdx_10am+"</td>  <td>"+pdx_11am+"</td>  <td>"+pdx_12pm+"</td>  <td>"+pdx_1pm+"</td>  <td>"+pdx_2pm+"</td>  <td>"+pdx_3pm+"</td>  <td>"+pdx_4pm+"</td>  <td>"+pdx_5pm+"</td>  <td>"+pdx_6pm+"</td> <td>"+pdx_total+"</td>";




//FOR VANCOUVER
var Vancouver = new makeShop("Vancouver", 9, 23, 6.33);
var Vancouver_6am = Vancouver.donutsThisHour(); // Geneate random donut total for 6 am
var Vancouver_7am = Vancouver.donutsThisHour(); // Geneate random donut total for 7 am
var Vancouver_8am = Vancouver.donutsThisHour(); // Geneate random donut total for 8 am
var Vancouver_9am = Vancouver.donutsThisHour(); // Geneate random donut total for 9 am
var Vancouver_10am = Vancouver.donutsThisHour(); // Geneate random donut total for 10 am
var Vancouver_11am = Vancouver.donutsThisHour(); // Geneate random donut total for 11 am
var Vancouver_12pm = Vancouver.donutsThisHour(); // Geneate random donut total for 12 pm
var Vancouver_1pm = Vancouver.donutsThisHour(); // Geneate random donut total for 1 pm
var Vancouver_2pm = Vancouver.donutsThisHour(); // Geneate random donut total for 2 pm
var Vancouver_3pm = Vancouver.donutsThisHour(); // Geneate random donut total for 3 pm
var Vancouver_4pm = Vancouver.donutsThisHour(); // Geneate random donut total for 4 pm
var Vancouver_5pm = Vancouver.donutsThisHour(); // Geneate random donut total for 5 pm
var Vancouver_6pm = Vancouver.donutsThisHour(); // Geneate random donut total for 6 pm

  // @HW ... but donut shops are sweat shops open 12 hours per day!
var Vancouver_total = Vancouver_6am + Vancouver_7am + Vancouver_8am + Vancouver_9am + Vancouver_10am + Vancouver_11am + Vancouver_12pm + Vancouver_1pm + Vancouver_2pm + Vancouver_3pm + Vancouver_4pm + Vancouver_5pm + Vancouver_6pm;

tr2.innerHTML="<td>" + "Vancouver" + "</td> <td>"+Vancouver_6am+"</td> <td>"+Vancouver_7am+"</td> <td>"+Vancouver_8am+"</td> <td>"+Vancouver_9am+"</td>  <td>"+Vancouver_10am+"</td>  <td>"+Vancouver_11am+"</td>  <td>"+Vancouver_12pm+"</td>  <td>"+Vancouver_1pm+"</td>  <td>"+Vancouver_2pm+"</td>  <td>"+Vancouver_3pm+"</td>  <td>"+Vancouver_4pm+"</td>  <td>"+Vancouver_5pm+"</td>  <td>"+Vancouver_6pm+"</td> <td>"+Vancouver_total+"</td>";

// For Salem:
var Salem = new makeShop("Salem", 2, 28, 1.25);

var Salem_6am = Salem.donutsThisHour(); // Geneate random donut total for 6 am
var Salem_7am = Salem.donutsThisHour(); // Geneate random donut total for 7 am
var Salem_8am = Salem.donutsThisHour(); // Geneate random donut total for 8 am
var Salem_9am = Salem.donutsThisHour(); // Geneate random donut total for 9 am
var Salem_10am = Salem.donutsThisHour(); // Geneate random donut total for 10 am
var Salem_11am = Salem.donutsThisHour(); // Geneate random donut total for 11 am
var Salem_12pm = Salem.donutsThisHour(); // Geneate random donut total for 12 pm
var Salem_1pm = Salem.donutsThisHour(); // Geneate random donut total for 1 pm
var Salem_2pm = Salem.donutsThisHour(); // Geneate random donut total for 2 pm
var Salem_3pm = Salem.donutsThisHour(); // Geneate random donut total for 3 pm
var Salem_4pm = Salem.donutsThisHour(); // Geneate random donut total for 4 pm
var Salem_5pm = Salem.donutsThisHour(); // Geneate random donut total for 5 pm
var Salem_6pm = Salem.donutsThisHour(); // Geneate random donut total for 6 pm


var Salem_total = Salem_6am + Salem_7am + Salem_8am + Salem_9am + Salem_10am + Salem_11am + Salem_12pm + Salem_1pm + Salem_2pm + Salem_3pm + Salem_4pm + Salem_5pm + Salem_6pm;

tr3.innerHTML="<td>" + "Salem" + "</td> <td>"+Salem_6am+"</td> <td>"+Salem_7am+"</td> <td>"+Salem_8am+"</td> <td>"+Salem_9am+"</td>  <td>"+Salem_10am+"</td>  <td>"+Salem_11am+"</td>  <td>"+Salem_12pm+"</td>  <td>"+Salem_1pm+"</td>  <td>"+Salem_2pm+"</td>  <td>"+Salem_3pm+"</td>  <td>"+Salem_4pm+"</td>  <td>"+Salem_5pm+"</td>  <td>"+Salem_6pm+"</td> <td>"+Salem_total+"</td>";


// For Eugene:
var Eugene = new makeShop("Eugene", 8, 58, 3.75);

var Eugene_6am = Eugene.donutsThisHour(); // Geneate random donut total for 6 am
var Eugene_7am = Eugene.donutsThisHour(); // Geneate random donut total for 7 am
var Eugene_8am = Eugene.donutsThisHour(); // Geneate random donut total for 8 am
var Eugene_9am = Eugene.donutsThisHour(); // Geneate random donut total for 9 am
var Eugene_10am = Eugene.donutsThisHour(); // Geneate random donut total for 10 am
var Eugene_11am = Eugene.donutsThisHour(); // Geneate random donut total for 11 am
var Eugene_12pm = Eugene.donutsThisHour(); // Geneate random donut total for 12 pm
var Eugene_1pm = Eugene.donutsThisHour(); // Geneate random donut total for 1 pm
var Eugene_2pm = Eugene.donutsThisHour(); // Geneate random donut total for 2 pm
var Eugene_3pm = Eugene.donutsThisHour(); // Geneate random donut total for 3 pm
var Eugene_4pm = Eugene.donutsThisHour(); // Geneate random donut total for 4 pm
var Eugene_5pm = Eugene.donutsThisHour(); // Geneate random donut total for 5 pm
var Eugene_6pm = Eugene.donutsThisHour(); // Geneate random donut total for 6 pm


var Eugene_total = Eugene_6am + Eugene_7am + Eugene_8am + Eugene_9am + Eugene_10am + Eugene_11am + Eugene_12pm + Eugene_1pm + Eugene_2pm + Eugene_3pm + Eugene_4pm + Eugene_5pm + Eugene_6pm;

tr4.innerHTML="<td>" + "Eugene" + "</td> <td>"+Eugene_6am+"</td> <td>"+Eugene_7am+"</td> <td>"+Eugene_8am+"</td> <td>"+Eugene_9am+"</td>  <td>"+Eugene_10am+"</td>  <td>"+Eugene_11am+"</td>  <td>"+Eugene_12pm+"</td>  <td>"+Eugene_1pm+"</td>  <td>"+Eugene_2pm+"</td>  <td>"+Eugene_3pm+"</td>  <td>"+Eugene_4pm+"</td>  <td>"+Eugene_5pm+"</td>  <td>"+Eugene_6pm+"</td> <td>"+Eugene_total+"</td>";


// For Medford:

var Medford = new makeShop("Medford", 4, 37, 2.00);

var Medford_6am = Medford.donutsThisHour(); // Geneate random donut total for 6 am
var Medford_7am = Medford.donutsThisHour(); // Geneate random donut total for 7 am
var Medford_8am = Medford.donutsThisHour(); // Geneate random donut total for 8 am
var Medford_9am = Medford.donutsThisHour(); // Geneate random donut total for 9 am
var Medford_10am = Medford.donutsThisHour(); // Geneate random donut total for 10 am
var Medford_11am = Medford.donutsThisHour(); // Geneate random donut total for 11 am
var Medford_12pm = Medford.donutsThisHour(); // Geneate random donut total for 12 pm
var Medford_1pm = Medford.donutsThisHour(); // Geneate random donut total for 1 pm
var Medford_2pm = Medford.donutsThisHour(); // Geneate random donut total for 2 pm
var Medford_3pm = Medford.donutsThisHour(); // Geneate random donut total for 3 pm
var Medford_4pm = Medford.donutsThisHour(); // Geneate random donut total for 4 pm
var Medford_5pm = Medford.donutsThisHour(); // Geneate random donut total for 5 pm
var Medford_6pm = Medford.donutsThisHour(); // Geneate random donut total for 6 pm


var Medford_total = Medford_6am + Medford_7am + Medford_8am + Medford_9am + Medford_10am + Medford_11am + Medford_12pm + Medford_1pm + Medford_2pm + Medford_3pm + Medford_4pm + Medford_5pm + Medford_6pm;

tr5.innerHTML="<td>" + "Medford" + "</td> <td>"+Medford_6am+"</td> <td>"+Medford_7am+"</td> <td>"+Medford_8am+"</td> <td>"+Medford_9am+"</td>  <td>"+Medford_10am+"</td>  <td>"+Medford_11am+"</td>  <td>"+Medford_12pm+"</td>  <td>"+Medford_1pm+"</td>  <td>"+Medford_2pm+"</td>  <td>"+Medford_3pm+"</td>  <td>"+Medford_4pm+"</td>  <td>"+Medford_5pm+"</td>  <td>"+Medford_6pm+"</td> <td>"+Medford_total+"</td>";








//Useless Code that I can't get to work.
/*var PL  = document.getElementById("pLog");
var tr1 = document.getElementById("tr1");

function mylog(z)     { PL.innerHTML += (z + "<br>"); }
function mylogNoBr(z) { PL.innerHTML += z; }
function clearLog()   { PL.innerHTML = ""; }

// Donut shop object constructor
function makeShop(loc, min, max, avg) {
  this.location    = loc;
  this.minCR = min; // Minimum customers/hour
  this.maxCR = max; // Maximum customers/hour
  this.donutsPerCust = avg;

  // Generate pseudo-random integer on [min, max]
  this.randIntFullRange = function() {
    return Math.floor(Math.random() * (this.maxCR - this.minCR + 1)) + this.minCR;
  };
  this.donutsThisHour = function() {
    return this.donutsPerCust * this.randIntFullRange();
  };
}

Portland = makeShop("Portland", 8, 43, 4.50);
Vancouver = makeShop("Vancouver", 9, 23, 6.33);
Salem = makeShop ("Salem", 2, 28, 1.25);
Eugene = makeShop ("Eugene",8, 58, 3.75);
Medford = makeShop("Medford", 4, 37, 2.00);

var shops = [Portland, Vancouver, Salem, Eugene, Medford
]; //array to hold donut branch data


var port = [];
var vanc = [];
var sale = [];
var euge = [];
var medf = [];

var Stores = [port, vanc, sale, euge, medf ]; // Array to hold printed data


//<table id="mytable"></table>

var mytable = document.getElementById("mytable");


//mytable.innerHTML = "<td>" + Portland + "</td> <td>" + dataStore.port[0] + "</td> <td>" + dataStore.port[1] + "</td> <td>" + dataStore.port[2] + "</td> <td>" + dataStore.port[3] + "</td> <td>" + dataStore.port[4]+"</td> <td>"+dataStore.port[5]+"</td> <td>"+dataStore.port[6]+"</td> <td>"+dataStore.port[7]+"</td> <td>"+dataStore.port[8]+"</td> <td>"+dataStore.port[9]+"</td> <td>"+dataStore.port[10]+"</td> <td>"+dataStore.port[11] "</td>";

//Al assisted loop psudo-code

for (ii=0; ii < shops.length; ii++) {   //loops through shop table

  myTable.innerHTML = "<tr>"   //opens the tr bracket in new row in myTable in DOM

  for (jj=0; jj<12; jj++) {    //loops through stores, and adds donuts this hour to each created block
    dth = Stores[ii].donutsThisHour();
    myTable.innerHTML += "<td>"+dth+"</td>"  //edit to add to row
  }

  myTable.innerHTML += "</tr>" //closes the new row

}

//while (dataStore[0].length < 11){
 // dataStore[0].push(PDX.donutsThisHour());
//}

*/


