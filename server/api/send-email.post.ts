import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'protrixxtechsolutions@gmail.com', // Replace with your real email
      subject: `New message from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
