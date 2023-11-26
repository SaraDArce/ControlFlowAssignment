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

// Function to calculate additional space requirements over weeks
function calculateAdditionalSpaceForPlants(plants, weeks) {
  const predictedCount = predictPlantGrowth(weeks);
  const additionalPlants = plants - predictedCount;
  const additionalSpaceRequired = additionalPlants * minSpacePerPlant;
  return additionalSpaceRequired;
}

// Calculate additional space required for 100 plants over 10 weeks without pruning
const plantsAt10Weeks = predictPlantGrowth(10);
const additionalSpaceFor100Plants = calculateAdditionalSpaceForPlants(100, 10);
const additionalSpaceRequired =
  additionalSpaceFor100Plants - (100 - plantsAt10Weeks) * minSpacePerPlant;
const expandedMaxCapacity = maxCapacity + additionalSpaceRequired;
const expandedRadius = Math.sqrt(expandedMaxCapacity / PI);

console.log(
  "\nAdditional space required after 10 weeks for 100 plants without pruning: " +
    additionalSpaceRequired.toFixed(2) +
    " square meters."
);
console.log(
  "Radius of expanded garden: " + expandedRadius.toFixed(2) + " meters."
);
