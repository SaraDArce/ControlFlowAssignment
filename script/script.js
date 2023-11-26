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
