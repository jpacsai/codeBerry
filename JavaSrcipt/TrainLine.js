var activeTrackStart = 10;
var activeTrackStop = 15;
var noTrackStart = 16;
var noTrackStop = 20;


for (activeTrackStart; activeTrackStart <= activeTrackStop; activeTrackStart ++) {
  console.log("There is traffic on track No. " + activeTrackStart);
}

for (noTrackStart; noTrackStart <= noTrackStop; noTrackStart ++) {
  console.log("There is NO traffic on track No. " + noTrackStart);
}