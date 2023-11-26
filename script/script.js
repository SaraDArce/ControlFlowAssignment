const PI = 3.1415;
const radius = 5;
const maxCapacity = PI * radius * radius;
const minSpacePerPlant = 0.8;
const startingPlantCount = 20;

// Function to predict plant growth after a specific number of weeks
function predictPlantGrowth(weeks) {
  let predictedCount = startingPlantCount;

  if (weeks >= 1) {
    predictedCount *= 2; // For 1 week
  }
  if (weeks >= 2) {
    predictedCount *= 2; // For 2 weeks
  }
  if (weeks >= 3) {
    predictedCount *= 2; // For 3 weeks
  }

  return predictedCount;
}

// Function to make decisions based on plant count after given weeks
function makeDecisions(weeks) {
  const predictedCount = predictPlantGrowth(weeks);
  const percentage = (predictedCount / maxCapacity) * 100;

  if (percentage > 80) {
    return "Prune";
  } else if (percentage >= 50 && percentage <= 80) {
    return "Monitor";
  } else {
    return "Plant more plants!";
  }
}

// Results for 1, 2, and 3 weeks of growth
console.log("Week 1: " + makeDecisions(1));
console.log("Week 2: " + makeDecisions(2));
console.log("Week 3: " + makeDecisions(3));
