import React from 'react';
import { ChileanPensionOutput } from './chileanPensionService';

interface ChileanPensionDisplayPanelProps {
  result: ChileanPensionOutput;
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const ChileanPensionDisplayPanel: React.FC<ChileanPensionDisplayPanelProps> = ({
  result,
}) => {
  return (
    <div className="chilean-pension-display-panel">
      <h2>Resultados de la Simulación</h2>
      
      <div className="result-section">
        <div className="result-item">
          <span className="label">Renta Vitalicia:</span>
          <span className="value">{formatCurrency(result.rentaVitalicia)}</span>
        </div>
        
        <div className="result-item">
          <span className="label">PGU:</span>
          <span className="value">{formatCurrency(result.pgu)}</span>
        </div>
        
        <div className="result-item">
          <span className="label">Seguro Social:</span>
          <span className="value">{formatCurrency(result.seguroSocial)}</span>
        </div>
        
        <div className="result-item total">
          <span className="label">Pensión Total:</span>
          <span className="value">{formatCurrency(result.totalPension)}</span>
        </div>
      </div>

      <div className="disclaimer">
        <p>
          * Esta simulación es una estimación basada en los datos proporcionados y las regulaciones actuales.
          Los montos reales pueden variar según las condiciones específicas y cambios en la legislación.
        </p>
      </div>
    </div>
  );
};

export default ChileanPensionDisplayPanel; 