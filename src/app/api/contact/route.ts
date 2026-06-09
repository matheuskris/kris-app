import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormErrorCodes } from "@/lib/contact-form-errors";

const FROM_EMAIL = "contato@matheuskris.dev";
const TO_EMAIL = "matheus.kris@gmail.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function errorResponse(code: string, status: number) {
  return NextResponse.json({ code }, { status });
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form: RESEND_API_KEY is not set.");
      return errorResponse(contactFormErrorCodes.SERVER_ERROR, 500);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return errorResponse(contactFormErrorCodes.SERVER_ERROR, 400);
    }

    const { name, email, message } = body as Record<string, unknown>;

    if (typeof name !== "string" || !name.trim()) {
      return errorResponse(contactFormErrorCodes.MISSING_NAME, 400);
    }

    if (typeof email !== "string" || !isValidEmail(email.trim())) {
      return errorResponse(contactFormErrorCodes.INVALID_EMAIL, 400);
    }

    if (typeof message !== "string" || !message.trim()) {
      return errorResponse(contactFormErrorCodes.MISSING_MESSAGE, 400);
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: trimmedEmail,
      subject: `Contact form: ${trimmedName}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(trimmedName)} &lt;${escapeHtml(trimmedEmail)}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Contact form: Resend error:", error);
      return errorResponse(contactFormErrorCodes.SEND_FAILED, 500);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: unexpected error:", error);
    return errorResponse(contactFormErrorCodes.SERVER_ERROR, 500);
  }
}
