import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    // Nodemailer ile e-posta gönderme işlemi
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER, // Gmail adresiniz
            pass: process.env.GMAIL_PASS, // Gmail şifreniz veya uygulama şifreniz
        },
    });

    const mailOptions = {
        from: email,
        to: 'altugaltuner6@gmail.com', // Buraya kendi e-posta adresinizi yazın
        subject: `Yeni mesaj: ${firstname} ${lastname}`,
        text: `
      İsim: ${firstname} ${lastname}
      E-posta: ${email}
      Telefon: ${phone}
      Servis: ${service}
      Mesaj: ${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}
