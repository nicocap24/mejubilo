import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { rating, comment, email } = await request.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'nico@pensionfi.com',
      subject: 'Nuevo Feedback de MeJubilo',
      html: `
        <h2>Nuevo Feedback Recibido</h2>
        <p><strong>Rating:</strong> ${rating === 'up' ? '👍' : '👎'}</p>
        <p><strong>Comentario:</strong></p>
        <p>${comment}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending feedback:', error);
    return NextResponse.json(
      { error: 'Error al enviar el feedback' },
      { status: 500 }
    );
  }
} 