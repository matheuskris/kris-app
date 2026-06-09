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

export function getContactFormErrorMessage(code: unknown): string {
  if (
    typeof code === "string" &&
    code in contactFormErrorMessages
  ) {
    return contactFormErrorMessages[code as ContactFormErrorCode];
  }

  return contactFormErrorMessages.server_error;
}
