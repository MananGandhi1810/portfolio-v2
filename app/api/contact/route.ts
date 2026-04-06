import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return Response.json(
                { error: "All fields are required" },
                { status: 400 }
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
            from: process.env.RESEND_FROM_EMAIL,
            to: "website-contact@manan.cloud",
            replyTo: email,
            subject: `Portfolio Contact: ${subject} from ${name}`,
            text: emailContent,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br />")}</p>
            `,
        });

        if (result.error) {
            console.error("Error sending email:", result.error);
            return Response.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return Response.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
