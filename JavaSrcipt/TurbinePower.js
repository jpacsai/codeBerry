var allTurbines = 25;
var turbineCounter;
var turbinePower;
var sumPower = 0;

for (turbineCounter = 1; turbineCounter <= allTurbines; turbineCounter++) {
  if (turbineCounter <=10) {
    turbinePower = 2000;
    sumPower += turbinePower;
    console.log("Turbine No. " + turbineCounter + " is working full speed, generating " + turbinePower + " MWh. The total generated power is " + sumPower + " Mwh."); }
  else if (turbineCounter <= 20) {
    turbinePower = 1000;
    sumPower += turbinePower;
    console.log("Turbine No. " + turbineCounter + " is working half speed, generating " + turbinePower + " MWh. The total generated power is " + sumPower + " Mwh."); }
  else if (turbineCounter <= 25) {
    turbinePower = 0;
    sumPower += turbinePower;
    console.log("Turbine No. " + turbineCounter + " is not working, generating " + turbinePower + " MWh. The total generated power is " + sumPower + " Mwh."); }
  else {
    console.log ("There's a problem.");
  }
}