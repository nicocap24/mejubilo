import React from 'react';
import {
  EconomicIndicator,
  SimulationOutput,
  // Ensure TimeSeriesDataPoint, PensionProjectionPoint, PensionScenario, SimulationInput are also exported if used standalone
  // For this component, EconomicIndicator and SimulationOutput are the primary prop types needed from shared types.
} from './types'; // Import from types.ts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// --- Data Model Interfaces are now imported from types.ts ---

interface PensionDisplayPanelProps {
  economicData: EconomicIndicator[]; // Imported type
  simulationOutput: SimulationOutput | null; // Imported type
}

// --- Helper function to format date strings for XAxis tick ---
const formatDateTick = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

// --- Helper function to format currency for Tooltip and YAxis ---
const formatCurrency = (value: number) => {
  return `£${value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

const formatPercentage = (value: number) => {
  return `${value.toFixed(2)}%`;
};


const PensionDisplayPanel: React.FC<PensionDisplayPanelProps> = ({
  economicData,
  simulationOutput,
}) => {
  // --- 1. Data Preparation for Economic Chart ---
  const preparedEconomicData = () => {
    if (!economicData || economicData.length === 0) return [];

    const allDates = new Set<string>();
    economicData.forEach(indicator => {
      indicator.data.forEach(dp => allDates.add(dp.date));
    });

    const sortedDates = Array.from(allDates).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    const chartData = sortedDates.map(date => {
      const dataPoint: any = { date };
      economicData.forEach(indicator => {
        const indicatorDataPoint = indicator.data.find(dp => dp.date === date);
        // Use indicator.id or a sanitized version for keys to avoid issues with special characters or spaces
        const key = indicator.id.replace(/[^a-zA-Z0-9]/g, '');
        dataPoint[key] = indicatorDataPoint ? indicatorDataPoint.value : null; // Use null for Recharts to handle gaps
      });
      return dataPoint;
    });
    return chartData;
  };

  const economicChartData = preparedEconomicData();

  // --- Colors for lines (example) ---
  const economicLineColors: { [key: string]: string } = {
    CPI: '#8884d8', // Inflation
    DGS10: '#82ca9d', // Treasury Yield
    SPY: '#ffc658', // ETF
  };
   const scenarioColors: { [key: string]: string } = {
    optimistic: '#82ca9d',
    neutral: '#8884d8',
    pessimistic: '#ff7300',
  };


  return (
    <div className="pension-display-panel">
      {/* --- Economic Indicators Chart --- */}
      <div className="chart-container">
        <h3 className="chart-title">Economic Indicators Overview</h3>
        {economicChartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={economicChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={formatDateTick} />
              <YAxis yAxisId="left" orientation="left" stroke={economicLineColors.CPI || "#8884d8"} tickFormatter={formatPercentage} />
              <YAxis yAxisId="right" orientation="right" stroke={economicLineColors.SPY || "#ffc658"} tickFormatter={formatCurrency} />
              <Tooltip
                formatter={(value: number, name: string) => {
                  const indicator = economicData.find(ind => ind.id.replace(/[^a-zA-Z0-9]/g, '') === name);
                  if (indicator?.unit === '%') return formatPercentage(value);
                  if (indicator?.unit === 'USD' || indicator?.unit === 'GBP') return formatCurrency(value);
                  return value;
                }}
                labelFormatter={formatDateTick}
              />
              <Legend />
              {economicData.map(indicator => (
                <Line
                  key={indicator.id}
                  type="monotone"
                  dataKey={indicator.id.replace(/[^a-zA-Z0-9]/g, '')}
                  name={indicator.name}
                  stroke={economicLineColors[indicator.id.replace(/[^a-zA-Z0-9]/g, '')] || '#000000'}
                  yAxisId={indicator.unit === '%' ? "left" : "right"}
                  connectNulls
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="loading-message">Economic data is not available or still loading.</p>
        )}
      </div>

      {/* --- Pension Projection Scenarios Chart --- */}
      <div className="chart-container">
        <h3 className="chart-title">Pension Projection Scenarios</h3>
        {simulationOutput ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" type="number" label={{ value: "Age", position: "insideBottom", offset: -10 }} />
              <YAxis tickFormatter={formatCurrency} label={{ value: "Projected Value (£)", angle: -90, position: "insideLeft" }}/>
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend verticalAlign="top" wrapperStyle={{paddingBottom: "10px"}}/>
              {simulationOutput.scenarios.map(scenario => (
                <Line
                  key={scenario.name}
                  type="monotone"
                  dataKey="value"
                  data={scenario.projection}
                  name={`${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} (${formatPercentage(scenario.assumptions.averageReturn)})`}
                  stroke={scenarioColors[scenario.name]}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="loading-message">Run a simulation to see pension projections.</p>
        )}
      </div>

      {/* --- Simulation Summary --- */}
      {simulationOutput && (
        <div className="summary-section">
          <h3 className="chart-title">Simulation Summary</h3>
          {simulationOutput.scenarios.map(scenario => (
            <div key={scenario.name} className="summary-item">
              <h4>{scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} Scenario</h4>
              <p>Assumed Average Annual Return: {formatPercentage(scenario.assumptions.averageReturn)}</p>
              <p>Projected Pension Pot at Retirement (Age {simulationOutput.inputs.retirementAge}): {formatCurrency(scenario.finalPensionPot)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Mock Data for Testing (as suggested) ---
// This mock data should ideally be removed or commented out in the final version
// if App.tsx is providing all necessary data.
// However, keeping it for isolated testing of PensionDisplayPanel can be useful.
const mockEconomicDataForPanel: EconomicIndicator[] = [
  {
    id: 'CPI', name: 'UK Consumer Price Index', type: 'inflation', unit: '%', // Matched with economicLineColors key
    data: [
      { date: '2022-01-01', value: 5.5 }, { date: '2022-04-01', value: 9.0 },
      { date: '2022-07-01', value: 10.1 }, { date: '2022-10-01', value: 11.1 },
      { date: '2023-01-01', value: 10.1 }, { date: '2023-04-01', value: 8.7 },
      { date: '2023-07-01', value: 6.8 }, { date: '2023-10-01', value: 4.6 },
    ],
  },
  {
    id: 'DGS10', name: 'UK 10-Year Gov Bond Yield', type: 'interestRate', unit: '%', // Matched
    data: [
      { date: '2022-01-01', value: 1.31 }, { date: '2022-04-01', value: 1.80 },
      { date: '2022-07-01', value: 2.20 }, { date: '2022-10-01', value: 3.80 },
      { date: '2023-01-01', value: 3.30 }, { date: '2023-04-01', value: 3.50 },
      { date: '2023-07-01', value: 4.40 }, { date: '2023-10-01', value: 4.50 },
    ],
  },
  {
    id: 'SPY', name: 'Sample FTSE 100 ETF', type: 'assetPrice', unit: 'USD', // Matched
    data: [
      { date: '2022-01-01', value: 7500 }, { date: '2022-04-01', value: 7400 },
      { date: '2022-07-01', value: 7200 }, { date: '2022-10-01', value: 6900 },
      { date: '2023-01-01', value: 7700 }, { date: '2023-04-01', value: 7850 },
      { date: '2023-07-01', value: 7600 }, { date: '2023-10-01', value: 7450 },
    ],
  },
];

const mockSimulationOutputForPanel: SimulationOutput = {
  inputs: { currentAge: 30, retirementAge: 65, initialInvestment: 25000, monthlyContribution: 300, expectedAnnualReturn: 6 },
  scenarios: [
    { name: 'optimistic', assumptions: { averageReturn: 8 }, projection: Array.from({length: 36}, (_, i) => ({ year: 2024+i, age: 30+i, value: parseFloat((25000 * Math.pow(1.08, i+1) + (300*12 * (Math.pow(1.08, i+1) -1 ) / 0.08)).toFixed(0)) })), finalPensionPot: 650000 },
    { name: 'neutral', assumptions: { averageReturn: 6 }, projection: Array.from({length: 36}, (_, i) => ({ year: 2024+i, age: 30+i, value: parseFloat((25000 * Math.pow(1.06, i+1) + (300*12 * (Math.pow(1.06, i+1) -1 ) / 0.06)).toFixed(0)) })), finalPensionPot: 450000 },
    { name: 'pessimistic', assumptions: { averageReturn: 4 }, projection: Array.from({length: 36}, (_, i) => ({ year: 2024+i, age: 30+i, value: parseFloat((25000 * Math.pow(1.04, i+1) + (300*12 * (Math.pow(1.04, i+1) -1 ) / 0.04)).toFixed(0)) })), finalPensionPot: 300000 },
  ]
};
// Example of how to use the panel with mock data (useful for isolated testing)
/*
const MockApp = () => {
  return (
    <div className="app-container">
      <header className="app-header"><h1>Pension Dashboard (Display Panel Test)</h1></header>
      <div className="content-layout">
        <div className="display-panel-container" style={{flexBasis: '100%'}}>
            <PensionDisplayPanel 
                economicData={mockEconomicDataForPanel} 
                simulationOutput={mockSimulationOutputForPanel} 
            />
        </div>
      </div>
    </div>
  );
};
// export default MockApp; // Uncomment to test this panel in isolation
*/
export default PensionDisplayPanel;
