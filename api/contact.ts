export const config = {
  runtime: "nodejs",
};
import { Resend } from "resend";
import { contactSchema } from "./contactSchema";

function adminEmailTemplate({
  name,
  email,
  title,
  message,
}: {
  name: string;
  email: string;
  title: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
  <html>
    <body style="margin:0; padding:24px; background:#f5f7fa; font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#111;">
      <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #e5e7eb; border-radius:8px; padding:24px;">
        
        <h2 style="margin:0 0 16px; font-size:20px; font-weight:600;">
          New contact form submission
        </h2>

        <div style="margin-bottom:16px; font-size:14px;">
          <p style="margin:0 0 6px;"><strong>Name:</strong> ${name}</p>
          <p style="margin:0 0 6px;"><strong>Email:</strong> ${email}</p>
          <p style="margin:0;"><strong>Subject:</strong> ${title}</p>
        </div>

        <div style="margin-top:20px;">
          <p style="margin:0 0 8px; font-weight:500;">Message</p>
          <div style="white-space:pre-wrap; background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px; font-size:14px; line-height:1.6;">
            ${message}
          </div>
        </div>

        <p style="margin-top:24px; font-size:12px; color:#6b7280;">
          This message was sent from your website contact form.
        </p>

      </div>
    </body>
  </html>
  `;
}

function userThankYouTemplate({ name }: { name: string }) {
  const site = process.env.SITE_NAME || "sir-p.tech";

  return `
  <!DOCTYPE html>
  <html>
    <body style="margin:0; padding:24px; background:#f5f7fa; font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#111;">
      <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #e5e7eb; border-radius:8px; padding:24px;">
        
        <p style="margin:0 0 12px; font-size:15px;">
          Hi ${name},
        </p>

        <p style="margin:0 0 12px; font-size:15px; line-height:1.6;">
          Thank you for reaching out through my website.
          I’ve received your message and will get back to you as soon as possible.
        </p>

        <p style="margin:0 0 20px; font-size:15px; line-height:1.6;">
          If you’d like to add more details, you can reply directly to this email.
        </p>

        <p style="margin:0; font-size:14px;">
          Best regards,<br />
          <strong>${site}</strong>
        </p>

      </div>
    </body>
  </html>
  `;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten() });
  }

  const { name, email, title, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY" });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const FROM_EMAIL =
    process.env.CONTACT_FROM_EMAIL || "contact@yourdomain.tech";
  const FROM_NAME =
    process.env.CONTACT_FROM_NAME || process.env.SITE_NAME || "Portfolio";
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "you@yourdomain.tech";

  try {
    // Notify you
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[${
        process.env.SITE_NAME || "Portfolio"
      }] ${title} — from ${name}`,
      html: adminEmailTemplate({ name, email, title, message }),
    });

    // Thank the sender
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [email],
      subject: `Thanks for contacting ${process.env.SITE_NAME || "me"} 🙌`,
      html: userThankYouTemplate({ name }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Email failed to send" });
  }
}
