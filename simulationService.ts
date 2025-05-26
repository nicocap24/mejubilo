interface SimulationInput {
  currentAge: number;
  retirementAge: number;
  initialInvestment: number; // Default to 0 if not provided
  monthlyContribution: number;
  expectedAnnualReturn: number; // Percentage, e.g., 7 for 7%
}

interface PensionProjectionPoint {
  year: number; // The calendar year of the projection
  age: number;  // The user's age at that year
  value: number; // Projected pension pot value in nominal terms
}

interface PensionScenario {
  name: 'optimistic' | 'neutral' | 'pessimistic';
  assumptions: {
    averageReturn: number; // %
  };
  projection: PensionProjectionPoint[];
  finalPensionPot: number;
}

interface SimulationOutput {
  inputs: SimulationInput;
  scenarios: PensionScenario[];
}

function calculateYearlyProjection(
  initialValue: number,
  annualContribution: number,
  annualReturnRate: number,
  currentAge: number,
  retirementAge: number,
  startYear: number
): PensionProjectionPoint[] {
  const projection: PensionProjectionPoint[] = [];
  let currentValue = initialValue;

  for (let age = currentAge; age <= retirementAge; age++) {
    // For the first year, if it's the current age, the initial investment is the starting point.
    // Contributions for the first year are added, then growth is applied.
    if (age === currentAge) {
        currentValue = (initialValue + annualContribution) * (1 + annualReturnRate / 100);
    } else {
        // For subsequent years, add contributions to the previous year's balance, then apply growth.
        currentValue = (currentValue + annualContribution) * (1 + annualReturnRate / 100);
    }
    projection.push({
      year: startYear + (age - currentAge),
      age: age,
      value: parseFloat(currentValue.toFixed(2)), // Round to 2 decimal places
    });
  }
  return projection;
}


export function runPensionSimulation(inputs: SimulationInput): SimulationOutput {
  const {
    currentAge,
    retirementAge,
    initialInvestment = 0, // Default to 0 if not provided
    monthlyContribution,
    expectedAnnualReturn,
  } = inputs;

  if (currentAge >= retirementAge) {
    throw new Error("Current age must be less than retirement age.");
  }
  if (monthlyContribution < 0) {
    throw new Error("Monthly contribution cannot be negative.");
  }
   if (expectedAnnualReturn < -100) { // Assuming return cannot be less than -100%
    throw new Error("Expected annual return is unrealistic.");
  }


  const scenarios: PensionScenario[] = [];
  const annualContribution = monthlyContribution * 12;
  const currentCalendarYear = new Date().getFullYear();

  const scenarioReturnRates = {
    optimistic: expectedAnnualReturn + 2.0,
    neutral: expectedAnnualReturn,
    pessimistic: expectedAnnualReturn - 2.0,
  };

  for (const scenarioName of ['optimistic', 'neutral', 'pessimistic'] as const) {
    const scenarioReturn = scenarioReturnRates[scenarioName];
    const projectionPoints = calculateYearlyProjection(
      initialInvestment,
      annualContribution,
      scenarioReturn,
      currentAge,
      retirementAge,
      currentCalendarYear
    );

    const finalPensionPot = projectionPoints.length > 0 ? projectionPoints[projectionPoints.length - 1].value : initialInvestment;

    scenarios.push({
      name: scenarioName,
      assumptions: {
        averageReturn: scenarioReturn,
      },
      projection: projectionPoints,
      finalPensionPot: finalPensionPot,
    });
  }

  return {
    inputs: inputs,
    scenarios: scenarios,
  };
}

// Example Usage (can be commented out or moved to a test file)
/*
const simulationInputs: SimulationInput = {
  currentAge: 30,
  retirementAge: 65,
  initialInvestment: 10000,
  monthlyContribution: 500,
  expectedAnnualReturn: 7,
};

const results: SimulationOutput = runPensionSimulation(simulationInputs);
console.log(JSON.stringify(results, null, 2));

const simulationInputsNoInitial: SimulationInput = {
  currentAge: 25,
  retirementAge: 60,
  initialInvestment: 0,
  monthlyContribution: 200,
  expectedAnnualReturn: 5,
};
const resultsNoInitial: SimulationOutput = runPensionSimulation(simulationInputsNoInitial);
console.log(JSON.stringify(resultsNoInitial, null, 2));

const simulationInputsHighReturn: SimulationInput = {
  currentAge: 40,
  retirementAge: 67,
  initialInvestment: 50000,
  monthlyContribution: 1000,
  expectedAnnualReturn: 10,
};

const resultsHighReturn: SimulationOutput = runPensionSimulation(simulationInputsHighReturn);
console.log(JSON.stringify(resultsHighReturn, null, 2));

try {
    const invalidInputs: SimulationInput = {
        currentAge: 65,
        retirementAge: 60,
        initialInvestment: 10000,
        monthlyContribution: 500,
        expectedAnnualReturn: 7,
    };
    runPensionSimulation(invalidInputs);
} catch (e: any) {
    console.error("Error caught for invalid inputs:", e.message);
}
*/
