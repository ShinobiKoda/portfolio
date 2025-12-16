import { contactSchema, type ContactFormData } from "../schema/contactSchema";

export type ContactResponse = {
  ok: boolean;
  message?: string;
  errors?: unknown;
};


export async function sendContact(
  data: ContactFormData
): Promise<ContactResponse> {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten() };
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return {
        ok: false,
        message: text || `Request failed: ${res.status} ${res.statusText}`,
      };
    }

    return { ok: true, message: "Message sent" };
  } catch (err) {
    return {
      ok: false,
      message:
        err instanceof Error ? err.message : "Network error sending message",
    };
  }
}

export default sendContact;
