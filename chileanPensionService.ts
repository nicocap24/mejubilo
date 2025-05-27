export interface ChileanPensionInput {
  afpBalance: number;
}

export interface ChileanPensionOutput {
  rentaVitalicia: number;
  pgu: number;
  seguroSocial: number;
  totalPension: number;
}

const UF_VALUE = 39200; // Current UF value
const INDUSTRY_RATE = 3.27; // Current industry average rate
const MIN_UF_FOR_RENTA_VITALICIA = 3; // Minimum UF required for life annuity
const MIN_PGU_THRESHOLD = 729764; // Minimum threshold for PGU
const MAX_PGU_THRESHOLD = 1158355; // Maximum threshold for PGU
const MAX_PGU_AMOUNT = 214296; // Maximum PGU amount

export function calculateChileanPension(input: ChileanPensionInput): ChileanPensionOutput {
  // Calculate Renta Vitalicia
  const rentaVitalicia = calculateRentaVitalicia(input.afpBalance);
  
  // Calculate PGU based on Renta Vitalicia
  const pgu = calculatePGU(rentaVitalicia);
  
  // Calculate Seguro Social based on AFP balance
  const seguroSocial = calculateSeguroSocial(input.afpBalance);

  // Calculate total pension
  const totalPension = rentaVitalicia + pgu + seguroSocial;

  return {
    rentaVitalicia,
    pgu,
    seguroSocial,
    totalPension
  };
}

function calculateRentaVitalicia(afpBalance: number): number {
  // Formula: (Saldo * 3.27% * 2) / 12
  const rentaVitalicia = ((afpBalance * 0.0327) * 2) / 12;
  
  // Check if it meets minimum UF requirement (3 UF)
  const rentaVitaliciaInUF = rentaVitalicia / UF_VALUE;
  if (rentaVitaliciaInUF < MIN_UF_FOR_RENTA_VITALICIA) {
    return 0; // Not eligible for renta vitalicia
  }
  
  return Math.round(rentaVitalicia);
}

function calculatePGU(rentaVitalicia: number): number {
  if (rentaVitalicia < 729764) {
    return 214296; // PGU máximo cuando Renta Vitalicia < $729.764
  } else if (rentaVitalicia > 1158355) {
    return 0; // No hay PGU cuando Renta Vitalicia > $1.158.355
  } else {
    // PGU = $214.296 * ($1.158.355 - Renta Vitalicia) / ($1.158.355 - $729.764)
    const numerator = 1158355 - rentaVitalicia;
    const denominator = 1158355 - 729764;
    return Math.round(214296 * (numerator / denominator));
  }
}

function calculateSeguroSocial(afpBalance: number): number {
  if (afpBalance >= 50000000) {
    return 2.5 * UF_VALUE; // 2.5 UF
  } else if (afpBalance >= 25000000) {
    return 2 * UF_VALUE; // 2 UF
  } else {
    return 0; // No Seguro Social
  }
}

// Example usage:
/*
const pensionInput: ChileanPensionInput = {
  afpBalance: 60000000,
  fundType: 'A',
  afp: 'HABITAT',
  isMale: true,
  age: 65,
  hasDisability: false,
  maritalStatus: 'single',
  hasChildren: false,
  yearsInChile: 20,
  yearsInLast5Years: 4
};

const result = calculateChileanPension(pensionInput);
console.log(result);
*/ 