"use server";

import { contactSchema } from "../utils/contact.schema";

/** Getform endpoint (carried over from the legacy form). Server-side only. */
const GETFORM_ENDPOINT =
  process.env.GETFORM_ENDPOINT ?? "https://getform.io/f/amddzedb";

const REQUEST_TIMEOUT_MS = 10_000;

export type ContactActionErrorCode =
  "VALIDATION_ERROR" | "UPSTREAM_ERROR" | "NETWORK_ERROR";

export type ContactActionResult = {
  status: "success" | "failed";
  message?: string;
  error?: {
    code: ContactActionErrorCode;
    httpStatus: number;
    message: string;
  };
};

/**
 * Sends a contact message to Getform.
 *
 * Re-validates with the same Zod schema as the client. Honeypot hits are
 * reported as success so bots get no signal. Error `message`s are generic;
 * details are logged server-side only.
 */
export async function submitContactMessage(
  input: unknown,
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return {
      status: "failed",
      error: {
        code: "VALIDATION_ERROR",
        httpStatus: 400,
        message: "Some fields are missing or invalid.",
      },
    };
  }

  const { name, email, message, website } = parsed.data;

  if (website && website.trim().length > 0) {
    return { status: "success", message: "Message sent." };
  }

  try {
    const response = await fetch(GETFORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`[contact] Getform responded with HTTP ${response.status}`);
      return {
        status: "failed",
        error: {
          code: "UPSTREAM_ERROR",
          httpStatus: 502,
          message: "The message service is unavailable.",
        },
      };
    }

    return { status: "success", message: "Message sent." };
  } catch (err) {
    console.error("[contact] Failed to reach Getform", err);
    return {
      status: "failed",
      error: {
        code: "NETWORK_ERROR",
        httpStatus: 503,
        message: "The message service could not be reached.",
      },
    };
  }
}
