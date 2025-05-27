import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
}).base('appsn5byMLK5NsomT');

// Define the table name
const TABLE_NAME = 'simulacion';

// Interface for the evaluation data
export interface EvaluationData {
  nombre: string;
  email: string;
  afp: string;
  fondo: string;
  saldo: number;
  fechaNacimiento: string;
}

// Function to create a new evaluation record
export async function createEvaluation(data: EvaluationData) {
  try {
    const record = await base(TABLE_NAME).create([
      {
        fields: {
          "Nombre": data.nombre,
          "Email": data.email,
          "AFP": data.afp,
          "Fondo": data.fondo,
          "Saldo": data.saldo,
          "Fecha de nacimiento": data.fechaNacimiento,
          "Fecha de evaluación": new Date().toISOString(),
          "Estado": "Nueva"
        }
      }
    ]);
    return record;
  } catch (error) {
    console.error('Error creating evaluation record:', error);
    throw error;
  }
} 