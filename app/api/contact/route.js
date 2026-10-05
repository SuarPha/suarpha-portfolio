import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Su-Arpha Portfolio <hello@suarpha.se>",
      to: ["hello@suarpha.se"],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `
Name: ${name}
Phone: ${phone || "-"}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}