import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL)
      return Response.json(
        {
          error: "Contact form is unavailable. Please email hello@manan.cloud.",
        },
        { status: 503 },
      );
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (
      ![name, email, subject, message].every(
        (value) => typeof value === "string" && value.trim(),
      ) ||
      name.length > 200 ||
      subject.length > 300 ||
      message.length > 10000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const emailContent = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `.trim();

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: "website-contact@manan.cloud",
      replyTo: email,
      subject: `Portfolio Contact: ${subject} from ${name}`,
      text: emailContent,
    });

    if (result.error) {
      console.error("Error sending email:", result.error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
