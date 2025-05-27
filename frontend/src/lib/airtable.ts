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
  nombre?: string;
  email?: string;
}

// Function to create a new evaluation record
export async function createEvaluation(data: EvaluationData) {
  try {
    console.log('Intentando guardar en Airtable:', {
      table: TABLE_NAME,
      data: data
    });

    const fields: Record<string, any> = {
      'FechaNacimiento': data.fechaNacimiento,
      'AFP': data.afp,
      'Fondo': data.fondo,
      'Saldo': data.saldo
    };

    // Agregar nombre y email solo si están presentes
    if (data.nombre) fields['Nombre'] = data.nombre;
    if (data.email) fields['Email'] = data.email;

    const record = await base(TABLE_NAME).create([
      { fields }
    ]);

    console.log('Registro creado exitosamente:', record);
    return record;
  } catch (error) {
    console.error('Error detallado al crear evaluación:', error);
    throw error;
  }
} 