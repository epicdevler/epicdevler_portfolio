import { z } from "zod";

/** Field length limits shared by the client form and the server action. */
export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 5000 },
  honeypot: { max: 200 },
} as const;

/**
 * Contact form schema. Used by React Hook Form on the client and re-run by
 * the server action before anything is forwarded.
 *
 * `website` is a honeypot: it is visually hidden and real users leave it
 * empty. It is accepted by the schema (so bots get no validation hint) and
 * checked separately by the server action.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(CONTACT_LIMITS.name.min, "Please enter your name.")
    .max(
      CONTACT_LIMITS.name.max,
      `Name must be ${CONTACT_LIMITS.name.max} characters or fewer.`,
    ),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(CONTACT_LIMITS.email.max, "That email address is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  message: z
    .string()
    .trim()
    .min(
      CONTACT_LIMITS.message.min,
      `Tell me a little more (at least ${CONTACT_LIMITS.message.min} characters).`,
    )
    .max(
      CONTACT_LIMITS.message.max,
      `Message must be ${CONTACT_LIMITS.message.max} characters or fewer.`,
    ),
  website: z.string().max(CONTACT_LIMITS.honeypot.max).optional(),
});

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormValues = z.output<typeof contactSchema>;

export const CONTACT_FORM_DEFAULTS: ContactFormInput = {
  name: "",
  email: "",
  message: "",
  website: "",
};
