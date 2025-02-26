//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
lightBulbStatus = "broken";
if (lightBulbStatus === "On") {
  console.log(`Light bulb is On.`);
} else if (lightBulbStatus === "off") {
  console.log(`Light bulb is Off.`);
} else if (lightBulbStatus === "broken") {
  console.log(`Light bulb is Broken.`);
} else {
  console.log(`Please choose the correct input (On/Off/Broken)`);
}
