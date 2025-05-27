import React, { useState, useEffect, ChangeEvent } from 'react';
import { ChileanPensionInput, calculateChileanPension } from './chileanPensionService';

interface ChileanPensionInputPanelProps {
  onCalculationComplete: (result: ReturnType<typeof calculateChileanPension>) => void;
}

const ChileanPensionInputPanel: React.FC<ChileanPensionInputPanelProps> = ({
  onCalculationComplete,
}) => {
  const [afpBalance, setAfpBalance] = useState<string>('');

  const handleInputChange = (value: string) => {
    setAfpBalance(value);
  };

  useEffect(() => {
    try {
      const balance = parseFloat(afpBalance) || 0;
      const result = calculateChileanPension({ afpBalance: balance });
      onCalculationComplete(result);
    } catch (error) {
      console.error('Error calculating pension:', error);
    }
  }, [afpBalance, onCalculationComplete]);

  return (
    <div className="chilean-pension-input-panel">
      <h2>Calculadora de Pensión Chilena</h2>
      
      <div className="input-group">
        <label className="input-label" htmlFor="afpBalance">
          Saldo AFP ($)
        </label>
        <input
          className="input-field"
          id="afpBalance"
          type="number"
          value={afpBalance}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value)
          }
          placeholder="e.g., 60000000"
        />
      </div>

      <div className="info-section">
        <h3>Información Importante</h3>
        <ul>
          <li>Renta Vitalicia: (Saldo × 3.27% × 2) ÷ 12</li>
          <li>Si Renta Vitalicia es menor a 3 UF, el resultado es $0</li>
          <li>PGU: Varía según el monto de la Renta Vitalicia</li>
          <li>Seguro Social: Depende del saldo en AFP</li>
        </ul>
      </div>
    </div>
  );
};

export default ChileanPensionInputPanel; 