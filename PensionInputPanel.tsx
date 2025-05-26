import React, { useState, useEffect, ChangeEvent } from 'react';
import { SimulationInput } from './types'; // Import from types.ts

interface PensionInputPanelProps {
  onInputChange: (inputs: Partial<SimulationInput>) => void; // Partial because not all fields might be valid numbers yet
  initialValues?: Partial<SimulationInput>;
}

const PensionInputPanel: React.FC<PensionInputPanelProps> = ({
  onInputChange,
  initialValues = {},
}) => {
  const [currentAge, setCurrentAge] = useState<string>(
    initialValues.currentAge?.toString() || ''
  );
  const [retirementAge, setRetirementAge] = useState<string>(
    initialValues.retirementAge?.toString() || ''
  );
  const [initialInvestment, setInitialInvestment] = useState<string>(
    initialValues.initialInvestment?.toString() || ''
  );
  const [monthlyContribution, setMonthlyContribution] = useState<string>(
    initialValues.monthlyContribution?.toString() || ''
  );
  const [expectedAnnualReturn, setExpectedAnnualReturn] = useState<string>(
    initialValues.expectedAnnualReturn?.toString() || ''
  );

  // Effect to update local state if initialValues prop changes
  useEffect(() => {
    if (initialValues.currentAge !== undefined) setCurrentAge(initialValues.currentAge.toString());
    if (initialValues.retirementAge !== undefined) setRetirementAge(initialValues.retirementAge.toString());
    if (initialValues.initialInvestment !== undefined) setInitialInvestment(initialValues.initialInvestment.toString());
    if (initialValues.monthlyContribution !== undefined) setMonthlyContribution(initialValues.monthlyContribution.toString());
    if (initialValues.expectedAnnualReturn !== undefined) setExpectedAnnualReturn(initialValues.expectedAnnualReturn.toString());
  }, [initialValues]);


  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    key: keyof SimulationInput,
    value: string
  ) => {
    setter(value);
    const numericValue = value === '' ? undefined : parseFloat(value);
    onInputChange({ [key]: numericValue });
  };

  // More specific handler for onInputChange to ensure all values are passed correctly
  useEffect(() => {
    const currentInputs: Partial<SimulationInput> = {};
    if (currentAge !== '') currentInputs.currentAge = parseFloat(currentAge);
    if (retirementAge !== '') currentInputs.retirementAge = parseFloat(retirementAge);
    if (initialInvestment !== '') currentInputs.initialInvestment = parseFloat(initialInvestment);
    if (monthlyContribution !== '') currentInputs.monthlyContribution = parseFloat(monthlyContribution);
    if (expectedAnnualReturn !== '') currentInputs.expectedAnnualReturn = parseFloat(expectedAnnualReturn);
    
    // Only call onInputChange if at least one value is not empty to avoid sending empty object on mount
    // or ensure it aligns with how parent expects to receive partial updates.
    // The previous handleInputChange already calls it field by field.
    // This effect can be used to consolidate and send the full partial object if needed,
    // but the per-field call in handleInputChange is more immediate.
    // For this setup, we'll rely on the per-field updates from handleInputChange.
    // This effect could be removed if per-field update is the desired behavior.
    // However, it's good for ensuring that any programmatic changes to state also trigger onInputChange.

    // Let's refine: onInputChange should be called with the most up-to-date partial input set.
    const buildCurrentInputs = () => {
        const inputsToReport: Partial<SimulationInput> = {};
        if (currentAge !== '' && !isNaN(parseFloat(currentAge))) inputsToReport.currentAge = parseFloat(currentAge);
        else if (initialValues.currentAge !== undefined && currentAge === '') inputsToReport.currentAge = undefined; // explicitly cleared

        if (retirementAge !== '' && !isNaN(parseFloat(retirementAge))) inputsToReport.retirementAge = parseFloat(retirementAge);
         else if (initialValues.retirementAge !== undefined && retirementAge === '') inputsToReport.retirementAge = undefined;

        if (initialInvestment !== '' && !isNaN(parseFloat(initialInvestment))) inputsToReport.initialInvestment = parseFloat(initialInvestment);
        else if (initialValues.initialInvestment !== undefined && initialInvestment === '') inputsToReport.initialInvestment = undefined;

        if (monthlyContribution !== '' && !isNaN(parseFloat(monthlyContribution))) inputsToReport.monthlyContribution = parseFloat(monthlyContribution);
        else if (initialValues.monthlyContribution !== undefined && monthlyContribution === '') inputsToReport.monthlyContribution = undefined;
        
        if (expectedAnnualReturn !== '' && !isNaN(parseFloat(expectedAnnualReturn))) inputsToReport.expectedAnnualReturn = parseFloat(expectedAnnualReturn);
        else if (initialValues.expectedAnnualReturn !== undefined && expectedAnnualReturn === '') inputsToReport.expectedAnnualReturn = undefined;
        
        return inputsToReport;
    }

    // This effect will call onInputChange whenever any of the input states change.
    // This is more robust for providing the full partial object.
    onInputChange(buildCurrentInputs());

  }, [currentAge, retirementAge, initialInvestment, monthlyContribution, expectedAnnualReturn, onInputChange, initialValues]);

  return (
    <div className="pension-input-panel">
      <div className="input-group">
        <label className="input-label" htmlFor="currentAge">
          Current Age
        </label>
        <input
          className="input-field"
          id="currentAge"
          type="number"
          value={currentAge}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCurrentAge(e.target.value) 
          }
          placeholder="e.g., 30"
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="retirementAge">
          Expected Retirement Age
        </label>
        <input
          className="input-field"
          id="retirementAge"
          type="number"
          value={retirementAge}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRetirementAge(e.target.value) 
          }
          placeholder="e.g., 65"
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="initialInvestment">
          Current Savings / Initial Pot (£)
        </label>
        <input
          className="input-field"
          id="initialInvestment"
          type="number"
          value={initialInvestment}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInitialInvestment(e.target.value) 
          }
          placeholder="e.g., 10000"
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="monthlyContribution">
          Monthly Savings Contribution (£)
        </label>
        <input
          className="input-field"
          id="monthlyContribution"
          type="number"
          value={monthlyContribution}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMonthlyContribution(e.target.value) 
          }
          placeholder="e.g., 500"
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="expectedAnnualReturn">
          Expected Annual Return (%)
        </label>
        <input
          className="input-field"
          id="expectedAnnualReturn"
          type="number"
          value={expectedAnnualReturn}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setExpectedAnnualReturn(e.target.value) 
          }
          placeholder="e.g., 7"
        />
      </div>
    </div>
  );
};

export default PensionInputPanel;
