import Airtable from 'airtable';

if (!process.env.NEXT_PUBLIC_AIRTABLE_API_KEY) {
  throw new Error('NEXT_PUBLIC_AIRTABLE_API_KEY is not defined in environment variables');
}

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base('appsn5byMLK5NsomT');

// Define the table name
const TABLE_NAME = 'simulacion';

// Interface for the evaluation data
export interface EvaluationData {
  afp: string;
  fondo: string;
  saldo: number;
  fechaNacimiento: string;
}

// Function to create a new evaluation record
export async function createEvaluation(data: EvaluationData) {
  try {
    console.log('Intentando guardar en Airtable:', {
      table: TABLE_NAME,
      data: data
    });

    const record = await base(TABLE_NAME).create([
      {
        fields: {
          'AFP': data.afp,
          'Fondo': data.fondo,
          'Saldo': data.saldo,
          'Fecha de Nacimiento': data.fechaNacimiento
        },
      },
    ]);

    console.log('Registro creado exitosamente:', record);
    return record;
  } catch (error) {
    console.error('Error detallado al crear evaluación:', error);
    throw error;
  }
} 