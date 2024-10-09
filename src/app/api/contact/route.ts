import { NextRequest, NextResponse } from 'next/server';

import { MailtrapClient } from "mailtrap"

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  console.log(name, email, message)  
  if (!name || !email || !message) {
    
    return NextResponse.json({ error: 'Please fill in all fields' }, { status: 400 });
  }

  /**
   * For this example to work, you need to set up a sending domain,
   * and obtain a token that is authorized to send from the domain.
   */
  
  const TOKEN = "8842fba70aca5bd851dd051407f81a4a";
  const SENDER_EMAIL = email;
  const RECIPIENT_EMAIL = "dev.epicdevler@gmail.com";
  
  const client = new MailtrapClient({ token: TOKEN });
  
  const sender = { name: name, email: SENDER_EMAIL };
  

  try {
    client
    .send({
      from: sender,
      to: [{ email: RECIPIENT_EMAIL }],
      subject: "Hello from Mailtrap!",
      text: "Welcome to Mailtrap Sending!",
    })
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }

}
