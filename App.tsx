import React, { useState, useEffect } from 'react';
import './App.css'; // Import the global stylesheet
import './ChileanPension.css';
import { fetchEconomicData } from './apiService';
import { runPensionSimulation } from './simulationService';
import { calculateChileanPension } from './chileanPensionService';
import PensionInputPanel from './PensionInputPanel';
import PensionDisplayPanel from './PensionDisplayPanel';
import ChileanPensionInputPanel from './ChileanPensionInputPanel';
import ChileanPensionDisplayPanel from './ChileanPensionDisplayPanel';
import { EconomicIndicator, SimulationOutput, SimulationInput } from './types';
import { ChileanPensionOutput } from './chileanPensionService';

// Placeholder API Key - for mock data, this might not be strictly needed by apiService if it defaults to mocks
const ALPHA_VANTAGE_API_KEY = "YOUR_MOCK_API_KEY";

const App: React.FC = () => {
  const [economicData, setEconomicData] = useState<EconomicIndicator[]>([]);
  const [isLoadingEconomicData, setIsLoadingEconomicData] = useState<boolean>(true);
  const [simulationResult, setSimulationResult] = useState<SimulationOutput | null>(null);
  const [appError, setAppError] = useState<string | null>(null); // For general app errors, including simulation
  const [chileanPensionResult, setChileanPensionResult] = useState<ChileanPensionOutput | null>(null);
  const [activeCalculator, setActiveCalculator] = useState<'uk' | 'chile'>('uk');

  // Default initial simulation inputs
  const initialSimulationInputs: SimulationInput = {
    currentAge: 30,
    retirementAge: 65,
    initialInvestment: 25000,
    monthlyContribution: 300,
    expectedAnnualReturn: 6,
  };

  const [simulationInputs, setSimulationInputs] = useState<Partial<SimulationInput>>(initialSimulationInputs);

  // Fetch Economic Data on Mount
  useEffect(() => {
    const loadEconomicData = async () => {
      setIsLoadingEconomicData(true);
      setAppError(null); // Clear previous errors
      try {
        const indicatorsToFetch = [
          { alphaVantageFunction: 'CPI', interval: 'monthly', id: 'CPI' },
          { alphaVantageFunction: 'TREASURY_YIELD', interval: 'monthly', maturity: '10year', id: 'DGS10' },
          { alphaVantageFunction: 'TIME_SERIES_DAILY_ADJUSTED', symbol: 'SPY', id: 'SPY' },
        ];

        const fetchedData = await Promise.all(
          indicatorsToFetch.map(indicator =>
            fetchEconomicData({
              alphaVantageFunction: indicator.alphaVantageFunction,
              symbol: indicator.symbol,
              interval: indicator.interval,
              maturity: indicator.maturity,
              apiKey: ALPHA_VANTAGE_API_KEY,
              useMockData: true, 
            })
          )
        );
        setEconomicData(fetchedData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while fetching economic data.';
        setAppError(`Error fetching economic data: ${errorMessage}`);
        setEconomicData([]); 
      } finally {
        setIsLoadingEconomicData(false);
      }
    };

    loadEconomicData();
  }, []); 

  // Function to validate SimulationInput
  const validateSimulationInputs = (inputs: Partial<SimulationInput>): inputs is SimulationInput => {
    return (
      inputs.currentAge !== undefined &&
      inputs.retirementAge !== undefined &&
      inputs.initialInvestment !== undefined &&
      inputs.monthlyContribution !== undefined &&
      inputs.expectedAnnualReturn !== undefined &&
      inputs.currentAge > 0 &&
      inputs.retirementAge > 0 &&
      inputs.currentAge < inputs.retirementAge &&
      inputs.initialInvestment >= 0 &&
      inputs.monthlyContribution >= 0 &&
      inputs.expectedAnnualReturn >= -50 && // Allow for some negative returns
      inputs.expectedAnnualReturn <= 100 // Cap returns at a reasonable high
    );
  };


  // Reactive Simulation Trigger on simulationInputs change
  useEffect(() => {
    if (validateSimulationInputs(simulationInputs)) {
      try {
        setAppError(null); // Clear previous simulation errors
        const result = runPensionSimulation(simulationInputs);
        setSimulationResult(result);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during simulation.';
        setAppError(`Simulation Error: ${errorMessage}`);
        setSimulationResult(null); // Clear results on error
      }
    } else {
      // Inputs are not valid or complete, clear previous results and show guidance
      setAppError("Please ensure all pension input fields are valid to see the projection.");
      setSimulationResult(null);
    }
  }, [simulationInputs]); // Rerun when simulationInputs change


  const handleSimulationInputChange = (inputs: Partial<SimulationInput>) => {
    setSimulationInputs(prev => ({ ...prev, ...inputs }));
  };

  const handleChileanPensionCalculation = (result: ChileanPensionOutput) => {
    setChileanPensionResult(result);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pension Projection Dashboard</h1>
        <div className="calculator-selector">
          <button 
            className={`calculator-button ${activeCalculator === 'uk' ? 'active' : ''}`}
            onClick={() => setActiveCalculator('uk')}
          >
            UK Pension Calculator
          </button>
          <button 
            className={`calculator-button ${activeCalculator === 'chile' ? 'active' : ''}`}
            onClick={() => setActiveCalculator('chile')}
          >
            Chilean Pension Calculator
          </button>
        </div>
      </header>

      {isLoadingEconomicData && <p className="loading-message">Loading economic data...</p>}
      
      {appError && (
        <div className="error-message-container">
          <p>{appError}</p>
        </div>
      )}

      {!isLoadingEconomicData && (
        <div className="content-layout">
          {activeCalculator === 'uk' ? (
            <>
              <div className="input-panel-container">
                <PensionInputPanel 
                  onInputChange={handleSimulationInputChange}
                  initialValues={simulationInputs} 
                />
              </div>
              <div className="display-panel-container">
                <PensionDisplayPanel
                  economicData={economicData}
                  simulationOutput={simulationResult} 
                />
              </div>
            </>
          ) : (
            <>
              <div className="input-panel-container">
                <ChileanPensionInputPanel 
                  onCalculationComplete={handleChileanPensionCalculation}
                />
              </div>
              <div className="display-panel-container">
                {chileanPensionResult && (
                  <ChileanPensionDisplayPanel
                    result={chileanPensionResult}
                  />
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
