import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST() {
    return NextResponse.json({ message: 'This is a POST request' });
}

export async function PUT() {
    return NextResponse.json({ message: 'This is a PUT request' });
}

export async function DELETE() {
    return NextResponse.json({ message: 'This is a DELETE request' });
}

