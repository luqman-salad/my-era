import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Keep this as is for testing
      to: ['luqmansalad00@gmail.com'],      // CHANGE THIS TO YOUR EMAIL
      subject: `[SYSTEM_CONTACT] ${subject}`,
      reply_to: email,
      html: `
        <div style="background: #050505; color: white; padding: 40px; font-family: monospace;">
          <h1 style="color: #137fec; border-bottom: 1px solid #333; padding-bottom: 10px;">MESSAGE_PAYLOAD</h1>
          <p><strong>SENDER:</strong> ${name}</p>
          <p><strong>REPLY_TO:</strong> ${email}</p>
          <p><strong>SUBJECT:</strong> ${subject}</p>
          <div style="background: #111; padding: 20px; border-radius: 10px; border: 1px solid #222; margin-top: 20px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}