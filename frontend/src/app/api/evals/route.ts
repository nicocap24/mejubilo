import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		const dataTOSheet = await fetch(
			`https://script.google.com/macros/s/AKfycbyd_J0C_x0AVo8JWs6Wpc5MjL7Im1O6rW7UQTRkd_3aOc-SV2IalXOniD8690JQvHKD/exec?endpoint=form`,
			{
				method: 'POST',
				body: JSON.stringify(body),
			}
		);

		if (!dataTOSheet.ok) {
			throw new Error(`HTTP error! status: ${dataTOSheet.status}`);
		}

		const res = await dataTOSheet.json();
		console.log('res: ', res);
		return NextResponse.json({
			result: 'success',
			message: 'Datos registrados correctamente',
		});
	} catch (error) {
		console.error('Error en la API:', error);
		return NextResponse.json(
			{ result: 'error', message: 'Error al procesar la solicitud' },
			{ status: 500 }
		);
	}
}
