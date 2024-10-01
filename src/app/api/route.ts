import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { firstname, lastname, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: 'altugaltuner6@gmail.com',
        subject: `New message from: ${firstname} ${lastname}`,
        text: `
            Name: ${firstname} ${lastname}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}
