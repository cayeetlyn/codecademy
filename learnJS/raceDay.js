let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 20;

if (registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18){
  console.log(`Your race number is ${raceNumber}, you will be running at 9:30 AM.`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}, you will be running at 11:00 AM.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}, you will be running at 12:30 PM.`);
} else {
  console.log("Please visit the registration desk for more information.");
}

