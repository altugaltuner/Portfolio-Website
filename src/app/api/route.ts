import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages, StreamData } from 'ai';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

export async function POST(req: Request) {

    const { messages } = await req.json();
    const data = new StreamData();

    const result = await streamText({
        model: openai('gpt-4-turbo'),
        messages: convertToCoreMessages(messages),
        onFinish() {
            data.close();
        },
    });
    return result.toDataStreamResponse({ data });
}

//burası mail gönderme kısmı
// const { firstname, lastname, email, phone, message } = await req.json();

// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//     },
// });

// const mailOptions = {
//     from: email,
//     to: 'altugaltuner6@gmail.com',
//     subject: `Yeni mesaj: ${firstname} ${lastname}`,
//     text: `
//   İsim: ${firstname} ${lastname}
//   E-posta: ${email}
//   Telefon: ${phone}
//   Mesaj: ${message}
// `,
// };

// try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
// } catch (error) {
//     return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
// }
