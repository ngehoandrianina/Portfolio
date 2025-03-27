// src/app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
      const { to,from, subject, text } = await request.json();
      console.log('Données reçues:', { to, subject, text });
  
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: `Nouveau message de ${from} : \n ${subject}`,
        text,
      };
  
      console.log('Envoi de l\'email...');
      await transporter.sendMail(mailOptions);
      console.log('Email envoyé avec succès');
  
      return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
    }
  }