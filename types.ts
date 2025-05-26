// types.ts

// --- Economic Data Types (from apiService.ts) ---
export interface TimeSeriesDataPoint {
  date: string; // YYYY-MM-DD
  value: number;
}

export interface EconomicIndicator {
  id: string;
  name: string;
  type: 'inflation' | 'interestRate' | 'gdp' | 'assetPrice' | string; // Allow string for flexibility
  unit: string;
  data: TimeSeriesDataPoint[];
  lastRefreshed?: string; // ISO date string
  source?: string;
}

// --- Pension Simulation Types (from simulationService.ts) ---
export interface SimulationInput {
  currentAge: number;
  retirementAge: number;
  initialInvestment: number;
  monthlyContribution: number;
  expectedAnnualReturn: number; // Percentage, e.g., 7 for 7%
}

export interface PensionProjectionPoint {
  year: number; // The calendar year of the projection
  age: number;  // The user's age at that year
  value: number; // Projected pension pot value in nominal terms
}

export interface PensionScenario {
  name: 'optimistic' | 'neutral' | 'pessimistic';
  assumptions: {
    averageReturn: number; // %
  };
  projection: PensionProjectionPoint[];
  finalPensionPot: number;
}

export interface SimulationOutput {
  inputs: SimulationInput;
  scenarios: PensionScenario[];
}

// --- API Service Specific Types ---
export interface FetchEconomicDataParams {
  alphaVantageFunction: string;
  symbol?: string;
  interval?: string; // e.g., 'monthly', 'daily' for time series, 'quarterly' for GDP
  maturity?: string; // e.g., '10year' for treasury yields
  apiKey: string;
  useMockData?: boolean;
}
