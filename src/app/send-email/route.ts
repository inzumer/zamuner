/** Resources */
import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@services';

export async function POST(request: NextRequest) {
  try {
    const service = new EmailService();

    const requestBody = await request.json();

    const { from, subject, message } = requestBody;

    const data = await service.sendEmail(from, subject, message);

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}