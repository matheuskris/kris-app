import type { Locale } from "@/lib/i18n/locales";

export const contactFormErrorCodes = {
  MISSING_NAME: "missing_name",
  INVALID_EMAIL: "invalid_email",
  MISSING_MESSAGE: "missing_message",
  SEND_FAILED: "send_failed",
  SERVER_ERROR: "server_error",
} as const;

export type ContactFormErrorCode =
  (typeof contactFormErrorCodes)[keyof typeof contactFormErrorCodes];

export const contactFormErrorMessages: Record<ContactFormErrorCode, string> = {
  missing_name: "Please enter your name.",
  invalid_email: "Please enter a valid email address.",
  missing_message: "Please write a message before sending.",
  send_failed: "We couldn't send your message. Please try again in a moment.",
  server_error: "Something went wrong on our end. Please try again later.",
};

export const contactFormNetworkErrorMessage =
  "Couldn't reach the server. Check your connection and try again.";

export const contactFormSuccessMessage = {
  title: "Message sent!",
  description: "Thanks for reaching out. I'll get back to you soon.",
} as const;

const contactFormCopyPt = {
  errors: {
    missing_name: "Informe seu nome.",
    invalid_email: "Informe um e-mail válido.",
    missing_message: "Escreva uma mensagem antes de enviar.",
    send_failed: "Não consegui enviar sua mensagem. Tente de novo em instantes.",
    server_error: "Algo deu errado por aqui. Tente de novo mais tarde.",
  },
  network:
    "Não foi possível falar com o servidor. Confira a conexão e tente de novo.",
  success: {
    title: "Mensagem enviada",
    description: "Valeu pelo contato. Respondo em breve.",
  },
} as const;

export type ContactFormCopy = {
  errors: Record<ContactFormErrorCode, string>;
  network: string;
  success: { title: string; description: string };
};

const contactFormCopyEn: ContactFormCopy = {
  errors: contactFormErrorMessages,
  network: contactFormNetworkErrorMessage,
  success: contactFormSuccessMessage,
};

export function getContactFormCopy(locale: Locale): ContactFormCopy {
  return locale === "pt" ? contactFormCopyPt : contactFormCopyEn;
}

export function getContactFormErrorMessage(
  code: unknown,
  locale: Locale = "en",
): string {
  const messages = getContactFormCopy(locale).errors;
  if (typeof code === "string" && code in messages) {
    return messages[code as ContactFormErrorCode];
  }

  return messages.server_error;
}
