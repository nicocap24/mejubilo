import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);
    
    // Validate required fields
    const { afp, fondo, saldo, fechaNacimiento, nombre, email } = data;
    if (!afp || !fondo || !saldo || !fechaNacimiento || !nombre || !email) {
      throw new Error('Missing required fields');
    }

    // Check if webhook URL is configured
    if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      throw new Error('GOOGLE_SHEETS_WEBHOOK_URL is not configured');
    }

    // Format date to Chile timezone
    const chileDate = new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    // Prepare the data for Google Sheets
    const sheetData = {
      FECHA: chileDate,
      NOMBRE: nombre,
      FECHANACIMIENTO: fechaNacimiento,
      AFP: afp,
      FONDO: fondo,
      SALDO: saldo,
      EMAIL: email
    };

    console.log('Sending data to Google Sheets:', {
      url: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
      data: sheetData
    });

    // Send data to Google Sheets webhook
    const response = await fetch(`${process.env.GOOGLE_SHEETS_WEBHOOK_URL}?endpoint=form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Sheets webhook error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        url: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
        data: sheetData
      });
      throw new Error(`Error al enviar datos a Google Sheets: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const responseData = await response.json();
    console.log('Google Sheets webhook response:', responseData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Evaluación guardada exitosamente',
      recordId: responseData.recordId
    });
  } catch (error) {
    console.error('Error en el endpoint de evaluaciones:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error al procesar la evaluación',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 